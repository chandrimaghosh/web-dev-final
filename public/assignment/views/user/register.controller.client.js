/**
 * Created by chandrimaghosh on 5/29/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);
    function RegisterController($location, $routeParams, UserService) {
        var vm = this;
        vm.createUser = createUser;
        var id = $routeParams.id;

        function init() {
            vm.user = UserService.findUserById(id);
        }

        init();
        function createUser(username, password, password2) {
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
                UserService.createUser(username, password)
                    .then(function (response) {
                        var newusercreated = response.data;
                        vm.user = newusercreated;
                        if (newusercreated) {
                            $location.url("/profile/" + newusercreated._id);
                        } else {
                            vm.error = "Unable to create User";
                        }
                    });
            }
        }
    }
})();
