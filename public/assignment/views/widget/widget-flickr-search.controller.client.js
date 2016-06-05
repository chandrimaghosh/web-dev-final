/**
 * Created by chandrimaghosh on 6/3/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("FlickrImageSearchController", FlickrImageSearchController);

    function FlickrImageSearchController(FlickrService) {
        var vm = this;

        vm.searchPhotos = searchPhotos;

        function searchPhotos(searchText) {
            console.log("flickr contrl")
                FlickrService
                    .searchPhotos(searchText)
                    .then(function(response){
                        data = response.data.replace("jsonFlickrApi(","");
                        data = data.substring(0,data.length - 1);
                        data = JSON.parse(data);
                        vm.photos = data.photos;
                    });
        }
    }
})();