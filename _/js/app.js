angular
    .module('appStrangerThings', [])
    .controller('strangerThingsController', function ($scope) {

        var socket = io.connect();

        $scope.letters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


        $scope.pressLetter = function (i) {
            socket.emit('message', i);
            console.log(i, 'o');
        };


        socket.on('message', function (response) {
            $scope.responseLetter = response;
            console.log( $scope.responseLetter, 'respo');
        })

    });