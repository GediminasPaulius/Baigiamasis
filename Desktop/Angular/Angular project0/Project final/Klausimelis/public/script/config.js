

angular.module('quizApp',['ui.router',"checklist-model",'ngMaterial','app.home','app.signin','app.signup','app.dash','app.getQuestion',"app.addQuestion",'app.userprofile'])




angular.module("quizApp")
.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    
   $stateProvider.state('home', {
                url: "/",
                templateUrl: "../components/home/home.html",
                controller: "quizCtrl"
            }
            )
            .state('signin', {
                    url: "/signin",
                    templateUrl: "../components/login/login.html",
                    controller: "loginCtrl"
                    
                }
            )
            .state('signup', {
                    url: "/signup",
                    templateUrl: "../components/signup/signup.html",
                    controller: "signupCtrl"
                }
            )
            
            
            .state('dashboard', {
                    url: "/dashboard",
                    templateUrl: "../components/dashboard/dash.html",
                    controller: "dashCtrl",
                    controllerAs: "dash",
                    loginCompulsory: true
                }
            )
           .state('getquestion', {
                    url: "/getquestion",
                    templateUrl: "../components/getQuestion/getquestion.html",
                    controller: "getQuizCtrl",
                    loginCompulsory: true
                }
            ) 
            .state('addquestion', {
                    url: "/addquestion",
                    templateUrl: "../components/addQuestion/addQuestion.html",
                    controller: "addQuestionCtrl",
                    loginCompulsory: true
                }
            )


            .state('userprofile', {
                    url: "/userprofile",
                    templateUrl: "../components/userprofile/userprofile.html",
                    controller: "userprofileCtrl",
                    loginCompulosry : true
                }
            );

        $urlRouterProvider.otherwise('/')
      $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
});


})

.constant('datainmongo','http://localhost:8888')

.run(function($rootScope,$state){
    $rootScope.$on("$stateChangeStart",function(event, toState){

        var session = sessionStorage.id;
        if(toState.loginCompulsory && session){
            event.preventDefault();
               $state.go('home');
        }
    })
    
})

