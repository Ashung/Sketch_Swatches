// Ant Design Colors
// http://ant.design/docs/spec/colors
var init_ant_design_colors = function(title) {
    var colors = [
        ["red-1", "fef0ef"],
        ["red-2", "fcdbd9"],
        ["red-3", "fabeb9"],
        ["red-4", "f79992"],
        ["red-5", "f46e65"],
        ["red-6", "f04134"],
        ["red-7", "d73435"],
        ["red-8", "bd2636"],
        ["red-9", "a31837"],
        ["red-10", "880a38"],
        ["green-1", "ebf8f2"],
        ["green-2", "cfefdf"],
        ["green-3", "a7e1c4"],
        ["green-4", "76d0a3"],
        ["green-5", "3dbd7d"],
        ["green-6", "00a854"],
        ["green-7", "00924c"],
        ["green-8", "007b43"],
        ["green-9", "00643b"],
        ["green-10", "004c32"],
        ["blue-1", "ecf6fd"],
        ["blue-2", "d2eafb"],
        ["blue-3", "add8f7"],
        ["blue-4", "7ec2f3"],
        ["blue-5", "49a9ee"],
        ["blue-6", "108ee9"],
        ["blue-7", "0e77ca"],
        ["blue-8", "0c60aa"],
        ["blue-9", "09488a"],
        ["blue-10", "073069"],
        ["pink-1", "feeff5"],
        ["pink-2", "fdd8e7"],
        ["pink-3", "fcb8d3"],
        ["pink-4", "fa90ba"],
        ["pink-5", "f7629e"],
        ["pink-6", "f5317f"],
        ["pink-7", "dc277d"],
        ["pink-8", "c11c7b"],
        ["pink-9", "a71278"],
        ["pink-10", "8c0776"],
        ["orange-1", "fef3eb"],
        ["orange-2", "fde3cf"],
        ["orange-3", "fccca7"],
        ["orange-4", "faaf76"],
        ["orange-5", "f78e3d"],
        ["orange-6", "f56a00"],
        ["orange-7", "d75000"],
        ["orange-8", "b93600"],
        ["orange-9", "991b00"],
        ["orange-10", "7a0000"],
        ["purple-1", "f4f3fd"],
        ["purple-2", "e4e2fa"],
        ["purple-3", "cfcaf6"],
        ["purple-4", "b3acf2"],
        ["purple-5", "948aec"],
        ["purple-6", "7265e6"],
        ["purple-7", "6252cd"],
        ["purple-8", "533eb4"],
        ["purple-9", "42299a"],
        ["purple-10", "321580"],
        ["yellow-1", "fffaeb"],
        ["yellow-2", "fff3cf"],
        ["yellow-3", "ffe9a7"],
        ["yellow-4", "ffdd76"],
        ["yellow-5", "ffce3d"],
        ["yellow-6", "ffbf00"],
        ["yellow-7", "e09a00"],
        ["yellow-8", "c17500"],
        ["yellow-9", "a04f00"],
        ["yellow-10", "802800"],
        ["cyan-1", "ebf8f9"],
        ["cyan-2", "cfedf0"],
        ["cyan-3", "a7dfe3"],
        ["cyan-4", "76cdd3"],
        ["cyan-5", "3db8c1"],
        ["cyan-6", "00a2ae"],
        ["cyan-7", "008997"],
        ["cyan-8", "00707f"],
        ["cyan-9", "005667"],
        ["cyan-10", "003c4e"],
        ["grey-1", "fbfbfb"],
        ["grey-2", "f7f7f7"],
        ["grey-3", "f5f5f5"],
        ["grey-4", "e9e9e9"],
        ["grey-5", "d9d9d9"],
        ["grey-6", "bfbfbf"],
        ["grey-7", "919191"],
        ["grey-8", "5a5a5a"],
        ["grey-9", "404040"],
        ["grey-10", "222222"]
    ];

    $(document).ready(function(){

        removeSwatches();

        for (var i = 0; i < colors.length; i ++) {
            var hex = colors[i][1];
            var name = colors[i][0];
            $("#swatches").append(
                '<li><button class="palette name" onclick="window.location.hash=\'' + hex + '\'" title="' + name + '" style="width:36px;height:36px;background:#' + hex + ';">' + hex + '</button></li>'
            );
        }

        initSwatches(title);

    });

};
