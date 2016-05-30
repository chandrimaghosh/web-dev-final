/**
 * Created by chandrimaghosh on 5/29/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetChooserController", WidgetChooserController);

    function WidgetChooserController($sce, $routeParams,$location, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId=$routeParams.pageId;
        var pageId = $routeParams.pageId;
        vm.chooseEdit=chooseEdit;
        vm.youtube="youtube";
        vm.header="header";
        vm.image="image";




        
        function chooseEdit(wType) {
            console.log("edit");
            console.log(wType);

            if(wType==="youtube")
            {
               var widgetId= WidgetService.createWidgetTypeandId("YOUTUBE",vm.pageId);

                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/"+widgetId+"");

            }
            if(wType==="header")

            {
                console.log("header");
                var widgetId= WidgetService.createWidgetTypeandId("HEADER",vm.pageId);

                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/"+widgetId+"");

            }
            if(wType==="image")
            {
                console.log("image");
                var widgetId= WidgetService.createWidgetTypeandId("IMAGE",vm.pageId);

                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/"+widgetId+"");

            }

            
        }


    }
})();