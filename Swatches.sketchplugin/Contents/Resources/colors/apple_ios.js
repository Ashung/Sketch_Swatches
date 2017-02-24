// https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
var init_apple_ios_colors = function(title) {
    var colors = [
        ["Red", "ff3b30"],
        ["Orange", "ff9500"],
        ["Yellow", "ffcc00"],
        ["Green", "4cd964"],
        ["Teal Blue", "5ac8fa"],
        ["Blue", "007aff"],
        ["Purple", "5856d6"],
        ["Pink", "ff2d55"]
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
