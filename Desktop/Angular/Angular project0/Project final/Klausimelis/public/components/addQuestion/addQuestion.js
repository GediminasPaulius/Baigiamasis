angular.module('app.addQuestion',[])
.controller('addQuestionCtrl',function($scope, $http, $document, $state, $location, $mdToast, datainmongo){
 var id = sessionStorage.id;

        $document.ready(function(){

            if(id !== '569f6c3b203e55c414c9800b'){
              $location.path('/');
              $state.go('home');
              $scope.isAdmin = false;
            }
            else if(id == '569f6c3b203e55c414c9800b'){
                $scope.isAdmin = true;
            }


     })
 $scope.question = {}
    $scope.saved = function(){

        console.log($scope.question)

        $http.post(datainmongo +'/addQuestion',$scope.question).success(function(data){
          console.log('Success ' +data.msg);
          $scope.data = data.msg;
         $mdToast.show(
         $mdToast.simple()
        .textContent($scope.data)
        .position("bottom right")
        .hideDelay(2000)

       );
         })

                  $scope.question = "";
    }
})


