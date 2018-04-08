var app = angular.module('app.dash',[]);
app.controller('dashCtrl',function($scope, $document, $http, $state, $rootScope, datainmongo){
var that = this;

      var id = sessionStorage.id; //authentication by id in mogodb
      that.isAdmin = false;
       //var userName = sessionStorage.userName;
        $document.ready(function(){
     
            if(id !== '569f6c3b203e55c414c9800b'){
           
             $state.go('home');       
            }
            if(id == '569f6c3b203e55c414c9800b'){
                that.isAdmin = true;
            }
         //$scope.users = 0;
           that.users = true;
           that.userResults = false;
          $http.post(datainmongo+'/findAllUsers').then(function(data){
           console.log("Getting response form Users" ,data);
           that.users = data.data.data;
           //console.log(that.users);
           that.userID = data.data.data;
           
         that.back2users = function(){
           that.errShow = false;  
           that.users = true;
           that.userResults = false;
           $http.post(datainmongo +'/findAllUsers').then(function(data){
           console.log("Getting response form Users" ,data);
           that.users = data.data.data;
           });
              
          }
           

          $scope.showUserResult = function(userID){
              that.users = false;
              that.userResults = true;
                console.log('userID', userID);
               $http.post(datainmongo +'/findAllResults',{userID: userID}).then(function(data){
                   console.log("user results " ,data.data.data);
                   
                   if(data.data.data == ""){
                          that.users = false;
                          that.userResults = false;
                          that.errShow = true;
                          that.showError = "There is no Result to Show";
                          that.showError = "There is no Result to Show";
                   }
                   else{
                      that.userResult = data.data.data;    
                          that.users = false;
                          that.userResults = true;
                          that.errShow = false;
                   
                   }
               }, function(err){
                   console.log("getting error " ,err);
               }) 
          
          }
          

           


       }, function(err){
           console.log("Getting Error",err)
       })
     
     
     })
     
          
           
     
});