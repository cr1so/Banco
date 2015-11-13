app.controller("InsertController", ['$scope', 'entidadBancariaService', function ($scope, entidadBancariaService) {

        $scope.entidadBancaria = {
            nombre: "",
            codigoEntidad: "",
            direccion: "",
            cif: ""
        };

        $scope.insert = function () {
            var response = entidadBancariaService.insert($scope.entidadBancaria);
            response.success(function () {
                alert("insertado con exito");
            }).error(function (data, status) {
                alert("no se ha podido insertar, ERROR " + status)
            });
        };
    }]);