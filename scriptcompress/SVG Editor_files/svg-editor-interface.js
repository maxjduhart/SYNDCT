var selectedElement;

var getFileSize = function(str) {
    var size = str.length / 1000;
    if (size > 1000) {
        return (Math.round(size / 100) / 10) + " MB";
    } else {
        return (Math.round(size * 10) / 10) + " kB";
    }
};

// Render the elements of an SVG in the named container
var drawSVG = function(container, elements) {
    var container_id = "#" + container;
    var $container = $(container_id);
    var $svg_wrapper = $(container_id + "-wrapper");
    var width = $container.css('width').slice(0, -2);
    
    $svg_wrapper.empty();
    $(elements).each( function(i) {
        this.toJQueryObject($svg_wrapper);
    });
    
    // Hack to reload the SVG
    $container.html($container.html());
    
    var resize = function() {
        var size = $(container_id + "-wrapper")[0].getBBox();
        if (size.width > 0) {
            var scale, dx, dy;
            if (size.width > size.height) {
                scale = (width - 10) / size.width;
                dx = -size.x;
                dy = -size.y + 0.5 * (size.width - size.height);
            } else {
                scale = (width - 10) / size.height;
                dx = -size.x + 0.5 * (size.height - size.width);
                dy = -size.y;
            }
            var transform = "translate(5 5) scale(" + scale + ") translate(" + dx + " " + dy + ")";
            document.getElementById(container + "-transform").setAttributeNS(null, "transform", transform);
        }
    };
    
    // Need to wait a bit to ensure elements drawn
    var size = window.setTimeout(resize, 100);
    //$(window).ready(resize);
    return $(container_id + '-wrapper')[0].getBBox();;
};

// Show the given window and hide the others
var loadWindow = function(item) {
    var windows = ['input', 'optimise', 'edit', 'output'];
    
    for (var i in windows) {
        var window = windows[i];
        if (item == window) {
            $('#' + window + '-area').show();
            $('#toolbar-' + window).addClass('selected');
        } else {
            $('#' + window + '-area').hide();
            $('#toolbar-' + window).removeClass('selected');
        }
    }
    
    // Draw and resize SVG
    if (item === 'edit') {
        drawSVG("full-svg", svg_tree.root.children);
    }
}

// Show element in sub-SVG window and its code in code window
// Scroll to its position in the map
var selectElement = function(id) {
    var element = svg_tree.id_to_element[id];
    var elementOnMap = $('#map-' + id);
    selectedElement = element;

    // Write element code
    displayElementDetails(element);

    // Scroll to code in the map
    if (elementOnMap.length === 1) {
        var scrollDiff = $('#svg-tree').scrollTop() - elementOnMap.position().top;
        $('#svg-tree').animate({ scrollTop: elementOnMap.position().top }, 'fast');
    }
    
    // Highlight code on map
    $('.svg-element-div').removeClass('selected');
    elementOnMap.addClass('selected');
    
    // Display element and get its size
    var size = drawSVG("sub-svg", [element]);
    
    // Draw red box on main SVG image
    var highlight = document.getElementById("highlight-rect");
    highlight.setAttributeNS(null, "x", size.x - 1);
    highlight.setAttributeNS(null, "y", size.y - 1);
    highlight.setAttributeNS(null, "width", size.width + 2);
    highlight.setAttributeNS(null, "height", size.height + 2);
    highlight.setAttributeNS(null, "visibility", "visible");
    
    // Refresh SVG
    var $container = $('#full-svg');
    $container.html($container.html());
};

// Write element attributes or styles
var writeElementDetailList = function(name, hash, element) {
    var decimal_places = element.tree.attrDecimals;
    var container = $('#element-' + name);
    container.empty();
    
    var title = $('<h3></h3>');
    container.append(title);
    
    var count = 0
    if (hash) {
        var table = $('<table></table>');
        
        for (var key in hash){           
            var row = $('<tr></tr>');
            row.append($('<td>' + key + '</td>'));
            var value = (element.tag === "path" && key === "d") ? element.getPathString(decimal_places) : decimal_places(hash[key]);
            row.append($('<td>' + value + '</td>'));
            table.append(row); 
            count++;
        }   
        container.append(table);
    }
    
    title.text(name + ' (' + count + ')');
};

// Write details of element
var displayElementDetails = function(element) {
    // Create breadcrumbs
    var breadcrumbs = $('#breadcrumbs');
    breadcrumbs.empty();
    
    for (var i in element.parents) {
        var breadcrumb = $('<span>' + element.parents[i].writeLabel() + '</span>');
        var id = element.parents[i].id;
        breadcrumb.on('click', function(evt) {
            selectElement(id);
        });
        breadcrumbs.append(breadcrumb);
    }
    breadcrumbs.append($('<span class="selected">' + element.writeLabel() + '</span>'))

    // Write attributes
    writeElementDetailList('attributes', element.getUsedAttributes(), element);

    // Write data
    var container = $('#element-data');
    container.empty();
    if (element.data !== "") {
        container.append($('<h3>Data</h3>'));
        container.append($('<div>' + element.data + '</div>'));
    }
    
    // Write styles
    var styles = {}
    var styleList = element.getUsedStyles();
    for (var s in styleList) {
        var style = styleList[s].split(':')
        styles[style[0]] = style[1];
    }
    writeElementDetailList('styles', styles, element);
};

var removeHighlight = function(evt) {
    var highlight = document.getElementById("highlight-rect");
    highlight.setAttributeNS(null, "visibility", "hidden");
};

// What to do when code for an element is clicked
var handleCodeClick = function(evt) {
    // Prevent parent elements from becoming selected
    evt.stopPropagation();
    
    // Get id of element which will be prefixed by 'map-'
    var id = $(this).attr('id').slice(4);
    selectElement(id);
};

var updateOutputCode = function() {
    var svg_string = svg_tree.toString();
    var new_file_size = getFileSize(svg_string);
    var percentage_diff = Math.round(1000 * svg_string.length / svg_tree.svg_string.length)/10;
    
    $('#optimised-file-size').text(new_file_size + " (" + percentage_diff + "%)");
    $('#output-svg-code').text(svg_string);
    $('#svg-string-form').val(svg_string);

    var $svg_wrapper = $('#optimised-svg-wrapper');
    var $svg = $('<div id="optimised-svg">' + svg_string + '</div>');
    $svg_wrapper.empty();
    $svg_wrapper.append($svg);
    
    if (selectedElement) { displayElementDetails(selectedElement); }
}

var namespaceCheckboxes = function() {
    var checkboxDiv = $('#remove-namespaces .optimise-options')
    checkboxDiv.empty();

    checkboxDiv.append($('<input type="checkbox" id="remove-all-namespaces"/>Remove all<br/>'));
    
    var count = 0;
    for (var ns in svg_tree.namespaces) {
        if (ns !== 'svg') {
            checkboxDiv.append($('<input type="checkbox" class="remove-namespace" name="' + ns + '"/>' + ns +'<br/>'));
            count++;
        }
    }
    
    if (count > 0) {
        $('.remove-namespace').change(function(evt) {
            svg_tree.namespaces[this.name] = !this.checked;
            updateOutputCode();
        });
        $('#remove-all-namespaces').change(function(evt) {
            $('.remove-namespace').prop('checked', this.checked).trigger('change');
        });
    } else {
        // No namespaces so hide namespace section
        $('#remove-namespaces').hide();
    }
}

var styleCheckboxes = function(toRemove, testType) {
    var checkboxDiv = $('#remove-' + toRemove + ' .optimise-options')
    checkboxDiv.empty();

    var title = $('<p></p>');
    checkboxDiv.append(title);
    checkboxDiv.append($('<input type="checkbox" id="remove-all-' + toRemove + '">Remove all<br/>'));
    
    var count = 0;
    for (var style in svg_tree.styles) {
        var styleType = style.split(':');
        
        if (testType(styleType[0], styleType[1])) {
            var name = styleType[0] + ": " + styleType[1] + " (" + svg_tree.styles[style].count + ")";
            checkboxDiv.append($('<input type="checkbox" class="remove-' + toRemove + '" name="' + style + '"/>' + name +'<br/>'));
            count += svg_tree.styles[style].count;
        }
    }
    
    if (count > 0) {
        title.html(toRemove.replace("-", " ") + " (" + count + ")");
        
        $('.remove-' + toRemove).change(function(evt) {
            if (svg_tree.styles[this.name]) { svg_tree.styles[this.name].display = !this.checked; }
            updateOutputCode();
        });
        $('#remove-all-' + toRemove).change(function(evt) {
            $('.remove-' + toRemove).prop('checked', this.checked).trigger('change');
        });
    } else {
        // No namespaces so hide section
        $('#remove-' + toRemove).hide();
    }
}

var loadSVG = function(svg_string) {
    svg_tree = new SVG_Tree(svg_string);
    selectedElement = undefined;
    
    // Draw map
    var svg_map = $('#svg-tree');
    svg_map.empty();
    svg_tree.root.createMap(svg_map);
    
    // Map interactions
    $('.svg-element-div').hover(
        function(evt) {
            $('.svg-element-div').removeClass('highlight');
            $(this).addClass('highlight');
            evt.stopPropagation();
        },
        function(evt) {
            $(this).removeClass('highlight');
        }
    );

    $('.svg-element-div').click(handleCodeClick);
    
    // File size
    $('#original-file-size').text(getFileSize(svg_tree.svg_string));

    // Default to no optimisation
    $('input:radio[name="optimisation"]').filter('[value="None"]').prop('checked', true);
    selectOptionSet("None");
    
    // Add remove namespaces options
    namespaceCheckboxes();
    
    // Add remove default styles options
    styleCheckboxes("default-styles", function(styleName, styleValue) { return defaultStyles[styleName] === styleValue; });
    
    // Add remove nonessential styles options
    styleCheckboxes("nonessential-styles", function(styleName, styleValue) { return nonEssentialStyles[styleName]; });
    
    // Enable options
    $('.toolbar-item').addClass("enabled");
    updateOutputCode();

    loadWindow("optimise");
};

var getToolbarClickFunction = function(window) {
    return function(evt) {
        if ($('#toolbar-' + window).hasClass('enabled')) {
            loadWindow(window);
        }
    };
};

var updateCheckbox = function(id, value) {
    var checkbox = $(id);
    checkbox.prop('checked', value);
    checkbox.trigger('change');
};

var checkboxOptions = {
    'Conservative': {
        '#use-CSS': false,
        '#remove-whitespace': false,
        '#remove-ids': false,
        '#remove-empty-elements': true,
        '#combine-paths': false,
        '#remove-clean-groups': true,
        '#remove-all-namespaces': false,
        '#remove-all-default-styles': true,
        '#remove-all-nonessential-styles': false,
    },
    'Extreme': {
        '#use-CSS': true,
        '#remove-whitespace': true,
        '#remove-ids': true,
        '#remove-empty-elements': true,
        '#combine-paths': true,
        '#remove-clean-groups': true,
        '#remove-all-namespaces': true,
        '#remove-all-default-styles': true,
        '#remove-all-nonessential-styles': true,
    },
    'None': {
        '#use-CSS': false,
        '#remove-whitespace': false,
        '#remove-ids': false,
        '#remove-empty-elements': false,   
        '#combine-paths': false,
        '#remove-clean-groups': false,        
        '#remove-all-namespaces': false,
        '#remove-all-default-styles': false,
        '#remove-all-nonessential-styles': false,
    }
};

// When the user selects a basic option, select a set of advanced options
var selectOptionSet = function(optimisation) {

    // Update checkboxes
    var options = checkboxOptions[optimisation];
    for (var id in options) {
        updateCheckbox(id, options[id]);
    }

    var attrDecimals = $('#attr-decimal-places');
    var styleDecimals = $('#style-decimal-places');
    
    switch(optimisation) {
        case 'Conservative':
            attrDecimals.val(2);
            styleDecimals.val(2);
            break;
        case 'Extreme':
            attrDecimals.val(1);
            styleDecimals.val(1);
            break;
        default:
            attrDecimals.val('unchanged');
            styleDecimals.val('unchanged');
            break;
    }
    
    attrDecimals.trigger('change');
    styleDecimals.trigger('change');
};

$(document).ready(function() {

    /*****************************
    * Buttons
    *****************************/

    $('#load-button').on('click', function(event) {
        loadSVG($('#input-svg-code').val());
    });
    
    $('#load-example-button').on('click', function(event) {
        loadSVG($('#scientist-example').html());
        $('#example-svg-attribution').show();
    });
    
    // Add toolbar buttons
    var windows = ["input", "optimise", "edit", "output"];
    for (var i in windows) {
        var window = windows[i];
        $('#toolbar-' + window).on('click', getToolbarClickFunction(window));
    }
    
    /*****************************
    * Optimise options
    *****************************/
    $("input:radio[name=optimisation]").change(function() {
        selectOptionSet($(this).val());
    });
    
    $('#remove-empty-elements').change(function() {
        svg_tree.removeEmptyElements = this.checked;
        updateOutputCode();
    });

    $('#remove-clean-groups').change(function() {
        svg_tree.removeCleanGroups = this.checked;
        updateOutputCode();
    });
    
    $('#remove-whitespace').change(function() {
        svg_tree.removeWhitespace = this.checked;
        updateOutputCode();
    });
    
    $('#attr-decimal-places').change(function() {
        svg_tree.attrDecimals = getDecimalPlaceFunction($('#attr-decimal-places').val());
        updateOutputCode();
    });
    
    $('#style-decimal-places').change(function() {
        svg_tree.styleDecimals = getDecimalPlaceFunction($('#style-decimal-places').val());
        updateOutputCode();
    });
    
    $('#remove-ids').change(function(evt) {
        svg_tree.removeIDs = this.checked;
        updateOutputCode();
    });

    $('#use-CSS').change(function() {
        svg_tree.useCSS = this.checked;
        updateOutputCode();
    });

    $('#combine-paths').change(function() {
        svg_tree.combinePaths = this.checked;
        if (svg_tree.combinePaths) {
            svg_tree.root.combinePaths();
        }
        updateOutputCode();
    });

    // If code in textbox start optimisation
    var svg_code = $('#input-svg-code').val();
    if (svg_code) { loadSVG(svg_code); }
});