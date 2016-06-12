/**
 * Created by chandrimaghosh on 5/26/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

   
    function WebsiteService($http) {
        var api = {
            createWebsite: createWebsite,
            findWebsitesForUserId: findWebsitesForUserId,
            deleteWebsite: deleteWebsite,
            updateWebsite: updateWebsite,
            findWebsiteById: findWebsiteById
        };
        return api;
        
        
        function deleteWebsite(websiteId) {
            var url= "/api/website/" + websiteId;
            console.log(url);
            return $http.delete(url);
            
        }

        function createWebsite(userId, name, desc) {
            var website = {
                name: name,
                description: desc,
                developerId:userId
            };
            return $http.post("/api/user/"+userId+"/website", website);
        }

        function updateWebsite(websiteId, name, desc) {
            var website = {
                name: name,
                description: desc

            };
            var url = "/api/website/" + websiteId;
            return $http.put(url, website);
        }

        function findWebsitesForUserId(userId) {
            console.log("client service reached")
            var id=userId;
            var url = "/api/user/"+id+"/website";
            console.log(url);
            return $http.get(url);

        }

        function findWebsiteById(websiteid) {
            console.log("client side called with website id"+websiteid);
           var url= "/api/website/" + websiteid;
            
            return $http.get(url);
        }
    }
})();