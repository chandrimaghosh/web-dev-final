/**
 * Created by chandrimaghosh on 5/29/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location,$routeParams, UserService) {
        var vm = this;

        vm.createUser =createUser;

        var id = $routeParams.id;


        function init() {
            vm.user = UserService.findUserById(id);

        }
        init();

        function createUser(username,password) {
            console.log("here");
            console.log("username is"+username);
            console.log("password is"+password);
           var newUser=  UserService.createUser(username, password);

            var newusercreated = UserService.findUserByUsername(username);

            if(newUser) {
                $location.url("/profile/"+ newusercreated._id);
            } else {
                vm.error = "Unable to create User";
            }

        }


    }

})();