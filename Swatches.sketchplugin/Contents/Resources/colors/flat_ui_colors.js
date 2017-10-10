// https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
var init_flat_ui_colors = function(title) {
    var colors = [
        ["Alizarin", "e74c3c"],
        ["Pomegranate", "c0392b"],
        ["Carrot", "e67e22"],
        ["Pumkin", "d35400"],
        ["Sun Flower", "f1c40f"],
        ["Orange", "f39c12"],
        ["Turquoise", "1abc9c"],
        ["Green Sea", "16a085"],
        ["Emerald", "2ecc71"],
        ["Nephritis", "27ae60"],
        ["Peter River", "3498db"],
        ["Belize Hole", "2980b9"],
        ["Amethyst", "9b59b6"],
        ["Wisteria", "8e44ad"],
        ["Wet Asphalt", "34495e"],
        ["Midnight Blue", "2c3e50"],
        ["Concrete", "95a5a6"],
        ["Asbestos", "7f8c8d"],
        ["Clouds", "ecf0f1"],
        ["Silver", "bdc3c7"]
    ];

    $(document).ready(function(){

        removeSwatches();

        for (var i = 0; i < colors.length; i ++) {
            var hex = colors[i][1];
            var name = colors[i][0];
            $("#swatches").append(
                '<li><button class="palette name" onclick="window.location.hash=\'' + hex + '\'" title="' + name + '" style="width:90px;height:90px;background:#' + hex + ';">' + hex + '</button></li>'
            );
        }

        initSwatches(title);

    });
};
