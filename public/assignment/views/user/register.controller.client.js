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
         if(!(username))
            {
                vm.error = "please enter username"
                vm.msg = {type: 'username-missing', text:"pass2-missing" }
            }
           else if ((password)&&(password !== password2)&&(password2)) {
                vm.error = "passwords dont match";
                vm.msg = {type: 'pass-mismatch', text:"paswword mismatch" }

            }
                else if(!(password))
            {
                vm.msg = {type: 'pass1-missing', text:"pass2-missing" }
                vm.error = "please enter password"
            }
            else if(!(password2))
            {
                vm.msg = {type: 'pass2-missing', text:"pass2-missing" }
                vm.error = "please enter password again to verify"
            }

            else {

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
