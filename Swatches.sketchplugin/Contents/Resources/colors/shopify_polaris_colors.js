// https://polaris.shopify.com/visuals/colors
var init_shopify_polaris_colors = function(title) {
    var colors = [

        ["Sky Lighter", "F9FAFB"],
        ["Sky Light", "F4F6F8"],
        ["Sky", "DFE4E8"],
        ["Sky Dark", "C4CDD5"],
        ["", ""],
        ["", ""],

        ["Ink Lightest", "919EAB"],
        ["Ink Lighter", "637381"],
        ["Ink Light", "454F5B"],
        ["Ink", "212B35"],
        ["", ""],
        ["", ""],

        ["Title bar Light", "B3B5CB"],
        ["Title bar", "43467F"],
        ["Title bar Dark", "1C2260"],
        ["Title bar Darker", "00044C"],
        ["", ""],
        ["", ""],

        ["Purple Lighter", "F6F0FD"],
        ["Purple Light", "E3D0FF"],
        ["Purple", "9C6ADE"],
        ["Purple Dark", "50248F"],
        ["Purple Darker", "230051"],
        ["Purple Text", "50495A"],

        ["Indigo Lighter", "F4F5FA"],
        ["Indigo Light", "B3BCF5"],
        ["Indigo", "5C6AC4"],
        ["Indigo Dark", "202E78"],
        ["Indigo Darker", "000639"],
        ["Indigo Text", "3E4155"],

        ["Blue Lighter", "EBF5FA"],
        ["Blue Light", "B4E1FA"],
        ["Blue", "007ACE"],
        ["Blue Dark", "084E8A"],
        ["Blue Darker", "001429"],
        ["Blue Text", "3E4E57"],

        ["Teal Lighter", "E0F5F5"],
        ["Teal Light", "B7ECEC"],
        ["Teal", "47C1BF"],
        ["Teal Dark", "00848E"],
        ["Teal Darker", "003135"],
        ["Teal Text", "405352"],

        ["Green Lighter", "E3F1DF"],
        ["Green Light", "BBE5B3"],
        ["Green", "50B83C"],
        ["Green Dark", "108043"],
        ["Green Darker", "173630"],
        ["Green Text", "414F3E"],

        ["Yellow Lighter", "FCF1CD"],
        ["Yellow Light", "FFEA8A"],
        ["Yellow", "EEC200"],
        ["Yellow Dark", "9C6F19"],
        ["Yellow Darker", "573B00"],
        ["Yellow Text", "595130"],

        ["Orange Lighter", "FCEBDB"],
        ["Orange Light", "FFC58B"],
        ["Orange", "F49342"],
        ["Orange Dark", "C05717"],
        ["Orange Darker", "4A1504"],
        ["Orange Text", "594430"],

        ["Red Lighter", "FBEAE5"],
        ["Red Light", "FEAF9A"],
        ["Red", "ED6347"],
        ["Red Dark", "BF0711"],
        ["Red Darker", "330101"],
        ["Red Text", "583C35"]

    ];

    $(document).ready(function(){

        removeSwatches();

        for (var i = 0; i < colors.length; i ++) {
            var hex = colors[i][1];
            var name = colors[i][0];
            $("#swatches").append(
                '<li><button class="palette name" onclick="window.location.hash=\'' + hex + '\'" title="' + name + '" style="width:60px;height:60px;background:#' + hex + ';">' + hex + '</button></li>'
            );
        }

        initSwatches(title);

    });

};
