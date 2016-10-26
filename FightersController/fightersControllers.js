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
            "pictureLink": "http://static.boxrec.com/thumb/f/f8/DiegoCorrales.jpg/200px-DiegoCorrales.jpg"
        }, {
            "firstName": "Bernard",
            "lastName": "Hopkins",
            "homeTown": "Philadelphia",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "http://static.boxrec.com/thumb/5/57/Hopkins84044610.jpg/200px-Hopkins84044610.jpg"
        }, {
            "firstName": "Juan",
            "lastName": "Marquez",
            "homeTown": "Mexico",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "http://static.boxrec.com/thumb/7/79/Juan_Manuel_Marquez.jpg/200px-Juan_Manuel_Marquez.jpg"
        }, {
            "firstName": "Mike",
            "lastName": "Tyson",
            "homeTown": "New York city",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "http://static.boxrec.com/thumb/5/59/Tyson-Spinks139051548.jpg/200px-Tyson-Spinks139051548.jpg"
        }, {
            "firstName": "Buakaw",
            "lastName": "Banchamek",
            "homeTown": "Thailand",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Picbuakaw.jpg/220px-Picbuakaw.jpg"
        }, {
            "firstName": "Saenchai",
            "homeTown": "Thailand",
            "lastName": "PK",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/SaenchaiSorKingstar.jpg/220px-SaenchaiSorKingstar.jpg"
        }, {
            "firstName": "Chris",
            "lastName": "Eubank",
            "homeTown": "Dulwich",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "http://static.boxrec.com/thumb/a/a5/Chris_Eubank.jpg/200px-Chris_Eubank.jpg"
        }, {
            "firstName": "Somluck",
            "lastName": "Kamsing",
            "homeTown": "Thailand",
            "weight": 174,
            "weightClass": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "http://zasenko.com/wp-content/uploads/2014/05/Somrak-Khamsing-200x300.jpg"
        }]
    });