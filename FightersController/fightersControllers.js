angular.module("fighters")
    .controller("fightersControllers", function ($scope) {

        $scope.location = null;
        $scope.tall = null;
        $scope.fat = null;
        $scope.position = null;



        // This calls stats in alert box.

        $scope.updateFighter = function (fighter) {
            setthecurrentfighter

            //Takes that fighters attribute and popluates them into the update form.

        }

        $scope.deleteFighter = function (fighter) {

            //Sets the current fighter then loops through fighters array to set current fighter using an id. Once found it splices figther out off array.
        }

        $scope.upDateCurrentFighter = function () {
            alert($scope.newLocation + $scope.newLbs + $scope.newStance);

            //Makes a copy of the new info on the fighter. Then loops through the array to find that fighter using fighters id. 
            //Splicing out the original adding the new.
            //Splice takes 3 arrguments #1 index #2 how many from the index to get rid of. #3 is opitional and you have the ability.
        }

        // Shows date in alert once date is entered.

        $scope.calendar = "mm/dd/yyyy";

        $scope.createDate = function () {
            alert($scope.calendar);

        }
        $("h1").fadeIn(7000);

        $("body").fadeIn(7000);

        // This how fighters are listed.

        $scope.target = "";
        $scope.fighters = [{
            "fullName": "Diego",
            "lastName": "Corrales",
            "fullName": "Diego Corrales",
            "homeTown": "Sacramento Ca",
            "weight": 174,
            "height": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "http://static.boxrec.com/thumb/f/f8/DiegoCorrales.jpg/200px-DiegoCorrales.jpg"
        }, {
            "firstName": "Bernard",
            "lastName": "Hopkins",
            "fullName": "Bernard Hopkins",
            "homeTown": "Philadelphia",
            "height": 174,
            "weight": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "http://static.boxrec.com/thumb/5/57/Hopkins84044610.jpg/200px-Hopkins84044610.jpg"
        }, {
            "firstName": "Juan",
            "lastName": "Marquez",
            "fullName": "Juan Marquez",
            "homeTown": "Mexico",
            "weight": 174,
            "height": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "http://static.boxrec.com/thumb/7/79/Juan_Manuel_Marquez.jpg/200px-Juan_Manuel_Marquez.jpg"
        }, {
            "firstName": "Mike",
            "lastName": "Tyson",
            "fullName": "Mike Tyson",
            "homeTown": "New York city",
            "weight": 174,
            "height": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "http://static.boxrec.com/thumb/5/59/Tyson-Spinks139051548.jpg/200px-Tyson-Spinks139051548.jpg"
        }, {
            "firstName": "Buakaw",
            "lastName": "Banchamek",
            "fullName": "Buakaw Banchamek",
            "homeTown": "Thailand",
            "weight": 174,
            "height": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Picbuakaw.jpg/220px-Picbuakaw.jpg",
        }, {
            "firstName": "Saenchai",
            "lastName": "PKSaenchaimuaythaigym",
            "fullName": "Saenchai PKSaenchaimuaythaigym",
            "homeTown": "Thailand",
            "weight": 174,
            "height": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/SaenchaiSorKingstar.jpg/220px-SaenchaiSorKingstar.jpg"
        }, {
            "firstName": "Chris",
            "lastName": "Eubank",
            "fullName": "Chris Eubank",
            "homeTown": "Dulwich",
            "weight": 174,
            "height": "Middle",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "http://static.boxrec.com/thumb/a/a5/Chris_Eubank.jpg/200px-Chris_Eubank.jpg"
        }, {
            "firstName": "Somluck",
            "lastName": "Kamsing",
            "fullName": "Somluck Kamsing",
            "homeTown": "Thailand",
            "weight": "126 lbs",
            "height": "5ft 9in",
            "stance": "Orthodox",
            "wins": 40,
            "loses": 5,
            "pictureLink": "http://zasenko.com/wp-content/uploads/2014/05/Somrak-Khamsing-200x300.jpg"
        }]
    });