/**
 * Created by chandrimaghosh on 5/26/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);


    function PageService($http) {
        var api = {
            createPage: createPage,
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };
        return api;
        function findPageByWebsiteId(websiteID) {
            var id = websiteID;
            var url = "/api/website/" + id + "/page";
            return $http.get(url);
        }

        function createPage(websiteID, name, title) {
            var newPage = {
                _id: (new Date()).getTime() + "",
                name: name,
                title: title,
                websiteId: websiteID
            };
            return $http.post("/api/website/"+websiteID+"/page", newPage);
        }

        function findPageById(pageId) {
            var url = "/api/page/" + pageId;
            return $http.get(url);
        }

        function updatePage(pageId, name, title) {
            var page = {
                name: name,
                title: title
            };
            var url = "/api/page/" + pageId;
            return $http.put(url, page);
        }

        function deletePage(pageId) {
            var url = "/api/page/" + pageId;
            return $http.delete(url);
        }
    }
})();