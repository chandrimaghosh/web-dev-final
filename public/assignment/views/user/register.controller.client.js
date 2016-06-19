/**
 * Created by chandrimaghosh on 5/29/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);
    function RegisterController($location, $routeParams, UserService,$rootScope) {
        var vm = this;

        vm.register = register;
        var id = $routeParams.id;

        function init() {
            vm.user = UserService.findUserById(id);
        }

        init();
        function register(username, password, password2) {
            if (password !== password2) {
                vm.error = "passwords dont match";

            }
                else if(!(password))
            {
                vm.error = "please enter password"
            }
            else if(!(password2))
            {
                vm.error = "please enter password again to verify"
            }
            else if(!(username))
            {
                vm.error = "please enter username"
            }
            else {
                console.log("hi");
                UserService.register(username, password)
                    .then(function (response) {
                        console.log("returns");
                        var newusercreated = response.data;
                        vm.user = newusercreated;
                        if (newusercreated) {
                            console.log("ooopsy daisy");
                            $rootScope.currentUser = newusercreated;
                            $location.url("/profile" );
                        } else {
                           
                            vm.error = "Unable to create User";
                        }
                    },function (err) {
                        vm.error = err.data;

                    });
            }
        }
    }
})();
