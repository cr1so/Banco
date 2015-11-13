function EntidadBancariaService($http) {

    this.list = function () {
        var response = $http({
            method: "GET",
            url: "/banco-api/api/entidadbancaria"
        });
        return response;
    }

    this.get = function (idEntidadBancaria) {

        var response = $http({
            method: "GET",
            url: "/banco-api/api/entidadbancaria/" + idEntidadBancaria
        });
        return response;
    }

    this.delete = function (idEntidadBancaria) {

        var response = $http({
            method: "DELETE",
            url: "/banco-api/api/entidadbancaria/" + idEntidadBancaria
        });
        return response;
    }
    
    this.insert = function (entidadBancaria){
        
        var response = $http({
                method: "POST",
                url: "/banco-api/api/entidadbancaria",
                data: entidadBancaria
                
            });
        return response;
    }
    
    this.update = function (entidadBancaria) {
        
        var response = $http({
            method: "PUT",
            url: "/banco-api/api/entidadbancaria/" + entidadBancaria.idEntidadBancaria,
            data: entidadBancaria 
        });
        
        return response;
    }

}

app.service("entidadBancariaService", EntidadBancariaService);