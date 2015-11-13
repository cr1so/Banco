
app.controller("ListController", ['$scope', '$http', 'entidadBancariaService', function ($scope, $http, entidadBancariaService) {

        var response = entidadBancariaService.list();
        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });

    }]);



