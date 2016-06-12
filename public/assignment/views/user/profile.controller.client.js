/**
 * Created by chandrimaghosh on 5/26/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);
    function ProfileController($location,$routeParams, UserService) {
        var vm = this;
        vm.updateUser = updateUser;
        vm.unregister=unregister;
        var id = $routeParams.id;

        function init() {
            UserService.findUserById(id)
            .then(function (response) {
                vm.user=response.data;
                console.log("user is "+vm.user.firstName)


            });
        }

        init();
        function updateUser(newUser) {


            UserService.updateUser(id, newUser)
            .then(
                function (response) {
                    
                    vm.success="Profile saved successfully"

            },
                function (error) {
                    
                    vm.error="unable to update"
                    
                }
            );
        }

        function unregister() {
            UserService
                .deleteUser(id)
                .then(
                    function(){
                        $location.url("/login");
                    },
                    function() {
                        vm.error = "Unable to remove user"
                    }
                );
        }
    }
})();