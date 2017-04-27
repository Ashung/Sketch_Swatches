/*----------------------------------------------------------

Copyright 2017 Ashung Hung

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

----------------------------------------------------------*/

function removeSwatches() {
    $("#swatches").empty();
}

function initSwatches(title) {
    $("#title").text(title);
    // init
    $("#swatches button").eq(0).addClass("focus");
    updateInterface($("#swatches button").eq(0).text(), $("#swatches button").eq(0).attr("title"));
    $("#swatches button").each(function(){
        $(this).click(function(){
            if ($(this).text() != "") {
                $("#swatches button.focus").each(function(){
                    $(this).removeClass("focus");
                });
                $(this).addClass("focus");
                updateInterface($(this).text(), $(this).attr("title"));
            }
        });
    });
    function updateInterface(hex, name) {
        $("#colorPreview").css("backgroundColor", "#" + hex);
        $("#colorName").text(name);
        $("#colorHex").text("#" + hex.toUpperCase());
        $("#icon_fill").attr("onclick", "window.location.hash='" + hex.toUpperCase() + "-fill-'" + " + new Date().getTime();");
        $("#icon_stroke").attr("onclick", "window.location.hash='" + hex.toUpperCase() + "-stroke-'" + " + new Date().getTime();");
        $("#icon_add").attr("onclick", "window.location.hash='" + hex.toUpperCase() + "-add-'" + " + new Date().getTime();");
        $("#icon_copy").attr("onclick", "window.location.hash='" + hex.toUpperCase() + "-copy-'" + " + new Date().getTime();");
        $("#icon_save").attr("onclick", "window.location.hash='save-to-system-'" + " + new Date().getTime();");
    }

    // Search
    var options = {
        valueNames: [
            "palette",
            { name: "name", attr: "title" }
        ]
    };

    var colorList = new List("container", options);
}

function getAllColors() {
    var colors = [];
    $("#swatches button").each(function(){
        if ($(this).text() != "") {
            colors.push([
                $(this).attr("title"),
                $(this).text()
            ]);
        }
    });
    return JSON.stringify(colors);
}
