/**
 * Created by chandrimaghosh on 6/3/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("FlickrService", FlickrService);

    var key = "d980af12864bc634065d3b0e36488a3c";
    var secret = "ee5d57858aa1955a";
    var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

    function FlickrService($http) {
        var api = {
            searchPhotos: searchPhotos
        };
        return api;

        function searchPhotos(searchTerm) {
            var url = urlBase
                .replace("API_KEY", key)
                .replace("TEXT", searchTerm);
            return $http.get(url);
        }
    }
})();

