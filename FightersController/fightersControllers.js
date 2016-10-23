angular.module("fighters")
    .controller("fightersControllers", function ($scope) {

// This how fighters are listed.

        $scope.target="";
        $scope.fighters = [{
            "firstName": "Diego",
            "lastName": "Corrales",
            "homeTown": "Sacramento usa",
            "weight": 174,
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink" : "http://static.boxrec.com/thumb/f/f8/DiegoCorrales.jpg/280px-DiegoCorrales.jpg"
        }, {
            "firstName": "Bernard",
            "lastName": "Hopkins",
            "homeTown": "Philadelphia usa",
            "weight": 174,
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }, {
            "firstName": "Juan",
            "lastName": "Marquez",
            "homeTown": "Mexico",
            "weight": 174,
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }, {
            "firstName": "Mike",
            "lastName": "Tyson",
            "homeTown": "new York city",
            "weight": 174,
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }, {
            "firstName": "Buakaw",
            "lastName": "Banchamek",
            "homeTown": "thaiLand",
            "weight": 174,
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }, {
            "firstName": "Saenchai",
            "homeTown": "thaiLand",
            "lastName": "PK",
            "weight": 174,
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }, {
            "firstName": "Chris",
            "lastName": "Eubank",
            "homeTown": "Dulwich",
            "weight": 174,
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }, {
            "firstName": "Masato",
            "lastName": "Kobayashi",
            "homeTown": "Japan",
            "weight": 174,
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5
        }]
    });