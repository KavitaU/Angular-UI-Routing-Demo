
angular.module('myApp')
    .controller('navCtrl', ['$scope', '$state', function ($scope, $state) {

        var NavCtrl = this;
        NavCtrl.activeTab = 'empRecords';

        NavCtrl.goToDetailPage = function(tabName){
            console.log('Tabname::::::::::::::::::',tabName);
            NavCtrl.activeTab = tabName;
            $state.go(tabName);
        }

        NavCtrl.tabs = [{
            name: 'empRecords'
        },{
            name: 'aboutUs'
        },{
            name: 't&c'
        },{
            name: 'contactUs'
        }]



    }]);