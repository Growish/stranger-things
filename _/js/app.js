angular
    .module('appStrangerThings', [])
    .controller('strangerThingsController', function ($scope, $timeout) {


        $scope.responseLetter = "";

        var socket = io.connect();

        $scope.letters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


        $scope.pressLetter = function (i) {
            $scope.sendLetter = i;
            socket.emit('message', $scope.sendLetter);
            console.log($scope.sendLetter, 'send');
        };

        socket.on('message', function (response) {
            $scope.responseLetter = response;
            console.log($scope.responseLetter, 'resp')

        });


    });