like.controller("ctrl",($scope,myfact)=>{
    $scope.load = () =>{
    var pr = myfact.talkToServer();
        pr.then(function(data){
            $scope.result = data;
        }, function(err){
            $scope.error = err;
        });
        
},
$scope.like=(id) =>{
$scope.result.data.forEach(element => {
    if(element.id==id){
        element.like++;
    }
});
}
});