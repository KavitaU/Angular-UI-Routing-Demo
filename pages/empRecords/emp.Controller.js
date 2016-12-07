angular.module('myApp')
    .controller('empRecordsCtrl', ['$scope', function ($scope) {

        console.log('EMP reacords contoller loaded--------s');

        var vm = $scope;


        $scope.isVisible = true;

        $scope.empList = [
            {
                empName: "abc",
                empId:'1009',
                empPractice:'FEEN'
            },{
                empName: "ss",
                empId:'1079',
                empPractice:'CQ'
            },{
                empName: "ff",
                empId:'1009',
                empPractice:'Grails'
            }
        ]



        $scope.editorEnabled = false;

        $scope.enableEditor = function(emp) {
            console.log(emp);
            $scope.editorEnabled = true;
            $scope.editableName = emp.empName;
            $scope.editableID = emp.empId;
            $scope.editablePractice = emp.empPractice;

        };

        $scope.toggle = function(emp){
            $scope.slectedEmpRecord=emp;
            $scope.isVisible = !$scope.isVisible
        };


        $scope.cancel = function(){
            $scope.editorEnabled = false;
        }

        $scope.delete = function($index){
            $scope.empList.splice($index, 1);
        }

        $scope.save = function(emp) {
            console.log(emp);
            $scope.cancel(emp);
        };

        vm.empName = '';
        vm.empId = '';
        vm.empPractice = '';
        vm.submit = function() {
            alert("Submitting...");
        };

    }]);

