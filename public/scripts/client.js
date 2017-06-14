var app = angular.module('fictionApp', []);

// app.config(function($routeProvider) {
//   $routeProvider.when('/', {
//     template: 'views/partials/harry.html',
//     controller: 'harryPotter as hp'
//   }).when('/luna', {
//     template: 'views/partials/luna.html',
//     controller: 'lunaLovegood as ll'
//   }).when('/voldemort', {
//     templateUrl: 'views/partials/voldemort.html',
//     controller: 'voldemort as v'
//   });
// });
// 
// app.controller('harryPotter', harryPotter);
// app.controller('lunaLovegood', lunaLovegood);

function harryPotter() {
  console.log('harryPotter loaded');
}

function lunaLovegood() {
  console.log('lunaLovegood loaded');
}

function voldemort() {
  console.log('voldemort loaded');
}
