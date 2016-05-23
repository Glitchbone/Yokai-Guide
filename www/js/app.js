angular.module('YokaiGuide', [
    'ionic',
    'jett.ionic.filter.bar'
])

.run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
            cordova.plugins.Keyboard.disableScroll(true);
        }

        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

    });

})

.config(function($stateProvider, $urlRouterProvider, $ionicFilterBarConfigProvider) {

    $ionicFilterBarConfigProvider.placeholder('Rechercher');
    $ionicFilterBarConfigProvider.theme('yokai');

    $stateProvider.state('yokai-list', {
        url: '/yokai',
        templateUrl: 'templates/yokai-list.html',
        controller: 'YokaiListController'
    })

    $urlRouterProvider.otherwise('/yokai');

});
