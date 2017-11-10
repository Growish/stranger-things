angular
    .module('appStrangerThings', [])
    .controller('strangerThingsController', function ($scope) {



        $scope.letters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


        // $scope.press = function (e, i) {
        //
        //     socket.emit('message');
        //     console.log(e, i);
        // }

    });