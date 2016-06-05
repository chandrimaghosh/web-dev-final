/**
 * Created by chandrimaghosh on 6/3/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("FlickrImageSearchController", FlickrImageSearchController);

    function FlickrImageSearchController($location,$routeParams,FlickrService,WidgetService) {
        var vm = this;

        vm.searchPhotos = searchPhotos;
        vm.selectPhoto=selectPhoto;
        vm.userId = $routeParams.userId;
        vm.pageId = $routeParams.pageId;
        vm.websiteId = $routeParams.websiteId;
        vm.widgetId = $routeParams.widgetId;

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

        function selectPhoto(photo) {
            var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
            url += "/" + photo.id + "_" + photo.secret + "_b.jpg";
            WidgetService.updateFlickrUrl(vm.widgetId, url)
                .then(
                    function (response) {
                        var result =response.data;
                        if (result) {
                            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/"+vm.widgetId);
                        } else {
                            vm.error = "Unable to load  Flickr image";
                        }

                    }
                );
        }
    }
})();