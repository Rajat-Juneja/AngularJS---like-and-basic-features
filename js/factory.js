like.factory("myfact",($http,$q)=>{

    const object = {

        talkToServer(){
            var pr = $q.defer();
            var url = "http://localhost:4000/items";
            $http.get(url).then(success,fail);

            function success(data){
                pr.resolve(data);
            }
            function fail(err){
                pr.reject(err);
            }
            return pr.promise;
        }


    };

    return object;

});
