app.controller("UpdateController", ['$scope', '$routeParams', 'entidadBancariaService', function ($scope, $routeParams, entidadBancariaService) {

        var idEntidadBancaria = $routeParams.idEntidadBancaria;

        entidadBancariaService.get(idEntidadBancaria).success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        });

        $scope.entidadBancaria = {
            idEntidadBancaria: "",
            nombre: "",
            codigoEntidad: "",
            direccion: "",
            cif: ""
        };

        $scope.update = function () {
            var response = entidadBancariaService.update($scope.entidadBancaria);
            response.success(function () {
                alert("actualizado con exito");
            }).error(function (data, status) {
                alert("no se ha podido actualizar, ERROR " + status)
            });
        };
    }]);