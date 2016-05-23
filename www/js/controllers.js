angular.module('YokaiGuide')

.controller('AppController', function($scope) {


})

.controller('YokaiListController', function($scope, Yokai, $ionicFilterBar, $ionicModal, $ionicLoading) {

    var items = [];

    $scope.yokaiList = [];

    $scope.sort = 'name';

    Yokai.all().then(function(data) {
        items = data;
        $scope.yokaiList = items;
    });

    $scope.setSortOrder = function(sortProp) {

        $scope.sort = sortProp == $scope.sort ? '-' + sortProp : sortProp;

    };

    $scope.showSearchBar = function() {

        $ionicFilterBar.show({
            items: items,
            update: function(filteredItems) {
                $scope.yokaiList = filteredItems;
            },
            debounce: false,
            filterProperties: 'name',
            cancelText: 'Annuler',
            cancelOnStateChange: false,
            done: function() {
                var el = document.querySelectorAll('.filter-bar-search')[0];
                el.setAttribute('autocorrect', 'off');
                el.setAttribute('autocapitalize', 'off');
            }
        });

    };

    $scope.showDetail = function(number) {

        Yokai.get(number).then(function(data) {
            $scope.yokai = data;
            $scope.yokaiDetail.show();
        });

    };

    $scope.showFilters = function() {

        $scope.filtersModal.show();

    };

    $ionicModal.fromTemplateUrl('templates/yokai-detail.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(yokaiDetail) {
        $scope.yokaiDetail = yokaiDetail;
    });

    $ionicModal.fromTemplateUrl('templates/filters.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(filtersModal) {
        $scope.filtersModal = filtersModal;
    });

    $scope.$on('$destroy', function() {
        $scope.yokaiDetail.remove();
        $scope.filtersModal.remove();
    });

    if (window.cordova) {
        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 1000);
    }

});
