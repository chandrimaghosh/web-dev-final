/**
 * Created by chandrimaghosh on 5/26/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);
    function ProfileController($routeParams, UserService) {
        var vm = this;
        vm.updateUser = updateUser;
        var id = $routeParams.id;

        function init() {
            vm.user = UserService.findUserById(id);
        }

        init();
        function updateUser(newUser) {
            UserService.updateUser(id, newUser);
        }
    }
})();