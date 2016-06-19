(function(){
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            login:login,
            createUser: createUser,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            findUserById: findUserById,
            updateUser: updateUser,
            deleteUser: deleteUser,
            logout:logout,
            loggedIn: loggedIn,
            register:register
        };
        return api;

        function loggedIn() {
            return $http.get("/api/loggedIn");
        }
        function logout(user) {
            return $http.post("/api/logout");
        }

        function createUser(username, password) {
            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/user", user);
        }
        function register(username, password) {
            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/register", user);
        }

        function deleteUser(userId) {
            var url = "/api/user/" + userId;
            return $http.delete(url);
        }

        function updateUser(id, newUser) {
            console.log("what id goes in"+id)
            var url = "/api/user/" + id;
            return $http.put(url, newUser);
        }

        function findUserById(id) {
            var url = "/api/user/" + id;
            return $http.get(url);
        }

        function findUserByUsernameAndPassword(username, password) {
            console.log("executed");
            var url = "/api/user?username="+username+"&password="+password;
            return $http.get(url);
        }
        function login(username, password) {
            var user = {
                username: username,
                password: password
            };
            console.log("user client side");
            return $http.post("/api/login", user);

        }
    }
})();