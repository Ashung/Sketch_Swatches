// https://atlassian.design/guidelines/brand/color-1
var init_atlassian_design_colors = function(title) {
    var colors = [

        ["R500 - Dragon's blood", "BF2600"],
        ["R400 - Red dirt", "DE350B"],
        ["R300 - Poppy surprise", "FF5630"],
        ["R200 - Salmon sashimi", "FF7452"],
        ["R100 - Alexandria", "FF8F73"],
        ["R75 - Bondi Sunburn", "FFBDAD"],
        ["R50 - Rosie", "FFEBE5"],

        ["Y500 - Debrito", "FF8B00"],
        ["Y400 - Cheezy blasters", "FF991F"],
        ["Y300 - Golden state", "FFAB00"],
        ["Y200 - Pub mix", "FFC400"],
        ["Y100 - Cowbell", "FFE380"],
        ["Y75 - Dandelion whisper", "FFF0B2"],
        ["Y50 - James blonde", "FFFAE5"],

        ["G500 - Keen green", "006644"],
        ["G400 - Slime", "00875A"],
        ["G300 - Our kellie", "36B37E"],
        ["G200 - Green tea", "57D9A3"],
        ["G100 - Cloverleaf", "79F2C0"],
        ["G75 - Mintie", "ABF5D1"],
        ["G50 - The smell", "E3FCEF"],

        ["T500 - Shabby chic", "008DA6"],
        ["T400 - Prom dress", "00A3BF"],
        ["T300 - Tamarama", "00B8D9"],
        ["T200 - Mermaid net", "00C7E5"],
        ["T100 - Hairy fairy", "79E2F2"],
        ["T75 - Arctic chill", "B3F5FF"],
        ["T50 - Gram's sofa", "E6FCFF"],

        ["B500 - Chore coat", "0747A6"],
        ["B400 - Pacific bridge", "0052CC"],
        ["B300 - Sodium explosion", "0065FF"],
        ["B200 - Coogee", "2684FF"],
        ["B100 - Arvo breeze", "4C9AFF"],
        ["B75 - Schwag", "B2D4FF"],
        ["B50 - Pixie dust", "DEEBFF"],

        ["P500 - Prince", "403294"],
        ["P400 - Snozzberry", "5243AA"],
        ["P300 - Da' juice", "6554C0"],
        ["P200 - Pastelli", "8777D9"],
        ["P100 - Herky jerky", "998DD9"],
        ["P75 - Phantom mist", "C0B6F2"],
        ["P50 - Lavender secret", "EAE6FF"],

        ["N900 - Slate", "091E42"],
        ["N800 - Squid ink", "172B4D"],
        ["N700 - Snorlax", "253858"],
        ["N600 - Pet rock", "344563"],
        ["N500 - McFanning", "42526E"],
        ["N400 - Concrete jungle", "505F79"],
        ["N300 - Clooney", "5E6C84"],
        ["N200 - Bling bling", "6C798F"],
        ["N100 - Humboldt fog", "7A869A"],
        ["N90 - Meredith", "8993A4"],
        ["N80 - Spooky ghost", "97A0AF"],
        ["N70 - Blanche", "A5ADBA"],
        ["N60 - Sentinel", "B3BAC5"],
        ["N50 - Karl", "C1C7D0"],
        ["N40 - Jolly fun time", "DFE1E5"],
        ["N30 - Northeast snow", "EBECF0"],
        ["N20 - Gram's hair", "F4F5F7"],
        ["N10 - Wash me", "FAFBFC"],
        ["N0 - Doctor", "FFFFFF"],

    ];

    $(document).ready(function(){

        removeSwatches();

        for (var i = 0; i < colors.length; i ++) {
            var hex = colors[i][1];
            var name = colors[i][0];
            $("#swatches").append(
                '<li><button class="palette name" onclick="window.location.hash=\'' + hex + '\'" title="' + name + '" style="width:50px;height:50px;background:#' + hex + ';">' + hex + '</button></li>'
            );
        }

        initSwatches(title);

    });

};
