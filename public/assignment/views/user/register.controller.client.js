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
        function createUser(username, password) {

             UserService.createUser(username, password)


            .then(function (response) {
                var newusercreated=response.data;
                vm.user=newusercreated;


                if (newusercreated) {
                    $location.url("/profile/" + newusercreated._id);
                } else {
                    vm.error = "Unable to create User";
                }
            });

        }
    }
})();
