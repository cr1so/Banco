app.controller("DeleteController", ['$scope', '$routeParams', 'entidadBancariaService', function ($scope, $routeParams, entidadBancariaService) {

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

        $scope.delete = function () {
            var response = entidadBancariaService.delete(idEntidadBancaria);
            response.success(function (data, status, headers, config) {
                alert("Borrado con exito");
            });
        };
    }]);