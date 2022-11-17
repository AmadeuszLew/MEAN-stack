function AppCtrl($scope, $http){


var refresh=function(){ 
    $http.get('/clientslist')
        .success(function(response){
        console.log("got the data: "+response);
        $scope.clientslist = response;
        $scope.client="";
        });
        console.log("hello from controller");
};
refresh();
$scope.addClient= function(){
    console.log($scope.client);
    $http.post('/clientslist', $scope.client)
    .success(function(response){
        console.log(response);
        refresh();
    })
};
$scope.remove=function(id){
    console.log(id);
    $http.delete('clientslist/'+id)
    .success(function(respone){
        refresh();
    });
}
}