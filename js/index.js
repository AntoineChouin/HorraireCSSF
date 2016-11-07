var app = angular.module("myApp", []);
app.controller("controllerName", myConFun);
myConFun.$inject = ["$scope"];

function myConFun($scope) {
  $scope.jedis = [{
    id: "obiWanKen",
    nom: {
      prenom: "Obi-Wan",
      famille: "kenobi"
    },
    species: "human",
    gender: "male",
    physique: {
      grandeur: "5'10'",
      poids: "87kg",
      yeux: "yeux",
      cheveu: "brun"
    },
    jedi: {
      rang: "Master",
      sabre: "blue",
      lame: "simple"
    }
  }, {
    id: "grandYoda",
    nom: {
      prenom: "Yoda",
    },
    species: "yoda",
    gender: "male",
    physique: {
      grandeur: "3metres",
      poids: "300lbs",
      yeux: "green",
      cheveu: "blanc"
    },
    jedi: {
      rang: "Grand Master",
      Sabre: "vert de feu",
      lame: "simple"
    }
  }];
}

$('#myCollapsible').collapse({
  toggle: false
})
