
angular.module('myApp',['ui.router','ngMessages'])

    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('empRecords', {
                url:'/',
                templateUrl: 'pages/empRecords/empRecords.html',
                controller: 'empRecordsCtrl'
            })
            .state('aboutUs', {
                url:'/aboutUs',
                templateUrl: 'pages/aboutUs/aboutUs.html',
                controller: 'aboutUsCtrl'
            })
            .state('contactUs', {
                url:'/contactUs',
                templateUrl: 'pages/contactUs/contactUs.html',
                controller: 'contactUsCtrl'
            })
            .state('t&c', {
                url:'/t&c',
                templateUrl: 'pages/t&c/t&c.html',
                controller: 't&cCtrl'
            })
    })
