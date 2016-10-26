angular.module("fighters")
    .controller("fightersControllers", function ($scope) {

        $scope.location = null;
        $scope.tall = null;
        $scope.fat = null;
        $scope.position = null;


// This callls stats in alert box.

        $scope.upDate = function () {
            alert($scope.location + $scope.tall + $scope.lbs + $scope.position);
        }

        // Shows date alert once date is entered.

        $scope.calendar = "NewFightDate";

        $scope.submitDate = function () {
            alert($scope.calendar);

        }

        // This how fighters are listed.

        $scope.target = "";
        $scope.fighters = [{
            "firstName": "Diego",
            "lastName": "Corrales",
            "homeTown": "Sacramento Ca",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "http://static.boxrec.com/thumb/f/f8/DiegoCorrales.jpg/280px-DiegoCorrales.jpg"
        }, {
            "firstName": "Bernard",
            "lastName": "Hopkins",
            "homeTown": "Philadelphia",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }, {
            "firstName": "Juan",
            "lastName": "Marquez",
            "homeTown": "Mexico",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }, {
            "firstName": "Mike",
            "lastName": "Tyson",
            "homeTown": "New York city",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }, {
            "firstName": "Buakaw",
            "lastName": "Banchamek",
            "homeTown": "Thailand",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }, {
            "firstName": "Saenchai",
            "homeTown": "Thailand",
            "lastName": "PK",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }, {
            "firstName": "Chris",
            "lastName": "Eubank",
            "homeTown": "Dulwich",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }, {
            "firstName": "Masato",
            "lastName": "Kobayashi",
            "homeTown": "Japan",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }]
    });