(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService,$rootScope) {
        var vm = this;

        vm.login = function(username, password) {
            vm.error=null;
            vm.msg={type: 'unk', text:"no text" };
            vm.msguser={type: 'unk', text:"no text" };

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
                if (!(username && password))
                {
                    vm.error="please enter password and username"
                    vm.msguser = {type: 'erroruser', text:"please enter password" }

                    vm.msg = {type: 'error', text: "please  enter Username"};

                }
                else if(username)
                {
                vm.error="please enter password"
                vm.msguser = {type: 'erroruser', text:"please enter password" }
                    console.log("the  is this "+vm.msguser.text);
                }
               else   {
                    vm.error = "please  enter Username"
                    vm.msg = {type: 'error', text: "please  enter Username"};
                     console.log("the  is this2 "+vm.msg.text);
                }

            }}

    }
})();