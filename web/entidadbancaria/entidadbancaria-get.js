app.controller("GetController", ['$scope', '$routeParams', 'entidadBancariaService', function ($scope, $routeParams, entidadBancariaService) {


        var idEntidadBancaria = $routeParams.idEntidadBancaria;

        entidadBancariaService.get(idEntidadBancaria).success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        });

    }]);
