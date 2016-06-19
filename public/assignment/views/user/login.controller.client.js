(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService,$rootScope) {
        var vm = this;

        vm.login = function(username, password) {

            if(username&&password)
            {

            UserService
                .login(username, password)
                .then(function(response){
                    console.log(response);
                    var user = response.data;
                    if(user) {
                        $rootScope.currentUser = user;
                        $location.url("/profile");
                    } else {//future logic

                    }
                },function (err) {
                    vm.error = "User not found";

                });
        }
            else {
                if(username)
                vm.error="please enter password"
                else
                    vm.error="please  enter Username"

            }}

    }
})();