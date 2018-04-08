angular.module('app.home',[])
.controller('quizCtrl',function($scope,$document,$rootScope,$state){
    


        
    
        $document.ready(function(){
       var id = sessionStorage.id;
           if(id == null){
         $rootScope.isLogin = false;
     }

     else{
        $rootScope.isLogin = true; 

     }
  
  
  
    })        
    

   

  $scope.myDate = Date.now();
});