// Google Material Design
var init_material_design_colors = function(title) {
    var colors = [
        {
            "title" : "Red",
            "items" : [
                ["Red",               "F44336"],
                ["Red 50",            "FFEBEE"],
                ["Red 100",           "FFCDD2"],
                ["Red 200",           "EF9A9A"],
                ["Red 300",           "E57373"],
                ["Red 400",           "EF5350"],
                ["Red 500",           "F44336"],
                ["Red 600",           "E53935"],
                ["Red 700",           "D32F2F"],
                ["Red 800",           "C62828"],
                ["Red 900",           "B71C1C"],
                ["Red A100",          "FF8A80"],
                ["Red A200",          "FF5252"],
                ["Red A400",          "FF1744"],
                ["Red A700",          "D50000"]
            ]
        },
        {
            "title" : "Pink",
            "items" : [
                ["Pink",              "E91E63"],
                ["Pink 50",           "FCE4EC"],
                ["Pink 100",          "F8BBD0"],
                ["Pink 200",          "F48FB1"],
                ["Pink 300",          "F06292"],
                ["Pink 400",          "EC407A"],
                ["Pink 500",          "E91E63"],
                ["Pink 600",          "D81B60"],
                ["Pink 700",          "C2185B"],
                ["Pink 800",          "AD1457"],
                ["Pink 900",          "880E4F"],
                ["Pink A100",         "FF80AB"],
                ["Pink A200",         "FF4081"],
                ["Pink A400",         "F50057"],
                ["Pink A700",         "C51162"]
            ]
        },
        {
            "title" : "Purple",
            "items" : [
                ["Purple",            "9C27B0"],
                ["Purple 50",         "F3E5F5"],
                ["Purple 100",        "E1BEE7"],
                ["Purple 200",        "CE93D8"],
                ["Purple 300",        "BA68C8"],
                ["Purple 400",        "AB47BC"],
                ["Purple 500",        "9C27B0"],
                ["Purple 600",        "8E24AA"],
                ["Purple 700",        "7B1FA2"],
                ["Purple 800",        "6A1B9A"],
                ["Purple 900",        "4A148C"],
                ["Purple A100",       "EA80FC"],
                ["Purple A200",       "E040FB"],
                ["Purple A400",       "D500F9"],
                ["Purple A700",       "AA00FF"]
            ]
        },
        {
            "title" : "Deep Purple",
            "items" : [
                ["Deep Purple",       "673AB7"],
                ["Deep Purple 50",    "EDE7F6"],
                ["Deep Purple 100",   "D1C4E9"],
                ["Deep Purple 200",   "B39DDB"],
                ["Deep Purple 300",   "9575CD"],
                ["Deep Purple 400",   "7E57C2"],
                ["Deep Purple 500",   "673AB7"],
                ["Deep Purple 600",   "5E35B1"],
                ["Deep Purple 700",   "512DA8"],
                ["Deep Purple 800",   "4527A0"],
                ["Deep Purple 900",   "311B92"],
                ["Deep Purple A100",  "B388FF"],
                ["Deep Purple A200",  "7C4DFF"],
                ["Deep Purple A400",  "651FFF"],
                ["Deep Purple A700",  "6200EA"]
            ]
        },
        {
            "title" : "Indigo",
            "items" : [
                ["Indigo",            "3F51B5"],
                ["Indigo 50",         "E8EAF6"],
                ["Indigo 100",        "C5CAE9"],
                ["Indigo 200",        "9FA8DA"],
                ["Indigo 300",        "7986CB"],
                ["Indigo 400",        "5C6BC0"],
                ["Indigo 500",        "3F51B5"],
                ["Indigo 600",        "3949AB"],
                ["Indigo 700",        "303F9F"],
                ["Indigo 800",        "283593"],
                ["Indigo 900",        "1A237E"],
                ["Indigo A100",       "8C9EFF"],
                ["Indigo A200",       "536DFE"],
                ["Indigo A400",       "3D5AFE"],
                ["Indigo A700",       "304FFE"]
            ]
        },
        {
            "title" : "Blue",
            "items" : [
                ["Blue",              "2196F3"],
                ["Blue 50",           "E3F2FD"],
                ["Blue 100",          "BBDEFB"],
                ["Blue 200",          "90CAF9"],
                ["Blue 300",          "64B5F6"],
                ["Blue 400",          "42A5F5"],
                ["Blue 500",          "2196F3"],
                ["Blue 600",          "1E88E5"],
                ["Blue 700",          "1976D2"],
                ["Blue 800",          "1565C0"],
                ["Blue 900",          "0D47A1"],
                ["Blue A100",         "82B1FF"],
                ["Blue A200",         "448AFF"],
                ["Blue A400",         "2979FF"],
                ["Blue A700",         "2962FF"]
            ]
        },
        {
            "title" : "Light Blue",
            "items" : [
                ["Light Blue",        "03A9F4"],
                ["Light Blue 50",     "E1F5FE"],
                ["Light Blue 100",    "B3E5FC"],
                ["Light Blue 200",    "81D4FA"],
                ["Light Blue 300",    "4FC3F7"],
                ["Light Blue 400",    "29B6F6"],
                ["Light Blue 500",    "03A9F4"],
                ["Light Blue 600",    "039BE5"],
                ["Light Blue 700",    "0288D1"],
                ["Light Blue 800",    "0277BD"],
                ["Light Blue 900",    "01579B"],
                ["Light Blue A100",   "80D8FF"],
                ["Light Blue A200",   "40C4FF"],
                ["Light Blue A400",   "00B0FF"],
                ["Light Blue A700",   "0091EA"]
            ]
        },
        {
            "title" : "Cyan",
            "items" : [
                ["Cyan",              "00BCD4"],
                ["Cyan 50",           "E0F7FA"],
                ["Cyan 100",          "B2EBF2"],
                ["Cyan 200",          "80DEEA"],
                ["Cyan 300",          "4DD0E1"],
                ["Cyan 400",          "26C6DA"],
                ["Cyan 500",          "00BCD4"],
                ["Cyan 600",          "00ACC1"],
                ["Cyan 700",          "0097A7"],
                ["Cyan 800",          "00838F"],
                ["Cyan 900",          "006064"],
                ["Cyan A100",         "84FFFF"],
                ["Cyan A200",         "18FFFF"],
                ["Cyan A400",         "00E5FF"],
                ["Cyan A700",         "00B8D4"]
            ]
        },
        {
            "title" : "Teal",
            "items" : [
                ["Teal",              "009688"],
                ["Teal 50",           "E0F2F1"],
                ["Teal 100",          "B2DFDB"],
                ["Teal 200",          "80CBC4"],
                ["Teal 300",          "4DB6AC"],
                ["Teal 400",          "26A69A"],
                ["Teal 500",          "009688"],
                ["Teal 600",          "00897B"],
                ["Teal 700",          "00796B"],
                ["Teal 800",          "00695C"],
                ["Teal 900",          "004D40"],
                ["Teal A100",         "A7FFEB"],
                ["Teal A200",         "64FFDA"],
                ["Teal A400",         "1DE9B6"],
                ["Teal A700",         "00BFA5"]
            ]
        },
        {
            "title" : "Green",
            "items" : [
                ["Green",             "4CAF50"],
                ["Green 50",          "E8F5E9"],
                ["Green 100",         "C8E6C9"],
                ["Green 200",         "A5D6A7"],
                ["Green 300",         "81C784"],
                ["Green 400",         "66BB6A"],
                ["Green 500",         "4CAF50"],
                ["Green 600",         "43A047"],
                ["Green 700",         "388E3C"],
                ["Green 800",         "2E7D32"],
                ["Green 900",         "1B5E20"],
                ["Green A100",        "B9F6CA"],
                ["Green A200",        "69F0AE"],
                ["Green A400",        "00E676"],
                ["Green A700",        "00C853"]
            ]
        },
        {
            "title" : "Light Green",
            "items" : [
                ["Light Green",       "8BC34A"],
                ["Light Green 50",    "F1F8E9"],
                ["Light Green 100",   "DCEDC8"],
                ["Light Green 200",   "C5E1A5"],
                ["Light Green 300",   "AED581"],
                ["Light Green 400",   "9CCC65"],
                ["Light Green 500",   "8BC34A"],
                ["Light Green 600",   "7CB342"],
                ["Light Green 700",   "689F38"],
                ["Light Green 800",   "558B2F"],
                ["Light Green 900",   "33691E"],
                ["Light Green A100",  "CCFF90"],
                ["Light Green A200",  "B2FF59"],
                ["Light Green A400",  "76FF03"],
                ["Light Green A700",  "64DD17"]
            ]
        },
        {
            "title" : "Lime",
            "items" : [
                ["Lime",              "CDDC39"],
                ["Lime 50",           "F9FBE7"],
                ["Lime 100",          "F0F4C3"],
                ["Lime 200",          "E6EE9C"],
                ["Lime 300",          "DCE775"],
                ["Lime 400",          "D4E157"],
                ["Lime 500",          "CDDC39"],
                ["Lime 600",          "C0CA33"],
                ["Lime 700",          "AFB42B"],
                ["Lime 800",          "9E9D24"],
                ["Lime 900",          "827717"],
                ["Lime A100",         "F4FF81"],
                ["Lime A200",         "EEFF41"],
                ["Lime A400",         "C6FF00"],
                ["Lime A700",         "AEEA00"]
            ]
        },
        {
            "title" : "Yellow",
            "items" : [
                ["Yellow",            "FFEB3B"],
                ["Yellow 50",         "FFFDE7"],
                ["Yellow 100",        "FFF9C4"],
                ["Yellow 200",        "FFF59D"],
                ["Yellow 300",        "FFF176"],
                ["Yellow 400",        "FFEE58"],
                ["Yellow 500",        "FFEB3B"],
                ["Yellow 600",        "FDD835"],
                ["Yellow 700",        "FBC02D"],
                ["Yellow 800",        "F9A825"],
                ["Yellow 900",        "F57F17"],
                ["Yellow A100",       "FFFF8D"],
                ["Yellow A200",       "FFFF00"],
                ["Yellow A400",       "FFEA00"],
                ["Yellow A700",       "FFD600"]
            ]
        },
        {
            "title" : "Amber",
            "items" : [
                ["Amber",             "FFC107"],
                ["Amber 50",          "FFF8E1"],
                ["Amber 100",         "FFECB3"],
                ["Amber 200",         "FFE082"],
                ["Amber 300",         "FFD54F"],
                ["Amber 400",         "FFCA28"],
                ["Amber 500",         "FFC107"],
                ["Amber 600",         "FFB300"],
                ["Amber 700",         "FFA000"],
                ["Amber 800",         "FF8F00"],
                ["Amber 900",         "FF6F00"],
                ["Amber A100",        "FFE57F"],
                ["Amber A200",        "FFD740"],
                ["Amber A400",        "FFC400"],
                ["Amber A700",        "FFAB00"]
            ]
        },
        {
            "title" : "Orange",
            "items" : [
                ["Orange",            "FF9800"],
                ["Orange 50",         "FFF3E0"],
                ["Orange 100",        "FFE0B2"],
                ["Orange 200",        "FFCC80"],
                ["Orange 300",        "FFB74D"],
                ["Orange 400",        "FFA726"],
                ["Orange 500",        "FF9800"],
                ["Orange 600",        "FB8C00"],
                ["Orange 700",        "F57C00"],
                ["Orange 800",        "EF6C00"],
                ["Orange 900",        "E65100"],
                ["Orange A100",       "FFD180"],
                ["Orange A200",       "FFAB40"],
                ["Orange A400",       "FF9100"],
                ["Orange A700",       "FF6D00"]
            ]
        },
        {
            "title" : "Deep Orange",
            "items" : [
                ["Deep Orange",       "FF5722"],
                ["Deep Orange 50",    "FBE9E7"],
                ["Deep Orange 100",   "FFCCBC"],
                ["Deep Orange 200",   "FFAB91"],
                ["Deep Orange 300",   "FF8A65"],
                ["Deep Orange 400",   "FF7043"],
                ["Deep Orange 500",   "FF5722"],
                ["Deep Orange 600",   "F4511E"],
                ["Deep Orange 700",   "E64A19"],
                ["Deep Orange 800",   "D84315"],
                ["Deep Orange 900",   "BF360C"],
                ["Deep Orange A100",  "FF9E80"],
                ["Deep Orange A200",  "FF6E40"],
                ["Deep Orange A400",  "FF3D00"],
                ["Deep Orange A700",  "DD2C00"]
            ]
        },
        {
            "title" : "Brown",
            "items" : [
                ["Brown",             "795548"],
                ["Brown 50",          "EFEBE9"],
                ["Brown 100",         "D7CCC8"],
                ["Brown 200",         "BCAAA4"],
                ["Brown 300",         "A1887F"],
                ["Brown 400",         "8D6E63"],
                ["Brown 500",         "795548"],
                ["Brown 600",         "6D4C41"],
                ["Brown 700",         "5D4037"],
                ["Brown 800",         "4E342E"],
                ["Brown 900",         "3E2723"]
            ]
        },
        {
            "title" : "Grey",
            "items" : [
                ["Grey",              "9E9E9E"],
                ["Grey 50",           "FAFAFA"],
                ["Grey 100",          "F5F5F5"],
                ["Grey 200",          "EEEEEE"],
                ["Grey 300",          "E0E0E0"],
                ["Grey 400",          "BDBDBD"],
                ["Grey 500",          "9E9E9E"],
                ["Grey 600",          "757575"],
                ["Grey 700",          "616161"],
                ["Grey 800",          "424242"],
                ["Grey 900",          "212121"]
            ]
        },
        {
            "title" : "Blue Grey",
            "items" : [
                ["Blue Grey",         "607D8B"],
                ["Blue Grey 50",      "ECEFF1"],
                ["Blue Grey 100",     "CFD8DC"],
                ["Blue Grey 200",     "B0BEC5"],
                ["Blue Grey 300",     "90A4AE"],
                ["Blue Grey 400",     "78909C"],
                ["Blue Grey 500",     "607D8B"],
                ["Blue Grey 600",     "546E7A"],
                ["Blue Grey 700",     "455A64"],
                ["Blue Grey 800",     "37474F"],
                ["Blue Grey 900",     "263238"]
            ]
        }
    ];


    $(document).ready(function(){

        removeSwatches();

        for (var i = 0; i < colors.length; i ++) {
            for (var j = 0; j < colors[i].items.length; j++) {
                var hex = colors[i].items[j][1];
                var name = colors[i].items[j][0];
                var html = '<li><button class="palette name" onclick="window.location.hash=\'' + hex + '\'" title="' + name + '" style="width:24px;height:24px;background:#' + hex + ';">' + hex + '</button></li>';
                if (j == 0) {
                    html = '<li><button class="palette name" onclick="window.location.hash=\'' + hex + '\'" title="' + name + '" style="clear:left;width:24px;height:24px;background:#' + hex + ';">' + hex + '</button></li>';
                }
                $("#swatches").append(html);
            }
        }

        initSwatches(title);

    });
};
