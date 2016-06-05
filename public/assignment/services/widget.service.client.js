/**
 * Created by chandrimaghosh on 5/26/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);


    function WidgetService($http) {
        var api = {
            findWidgetsForPageId: findWidgetsForPageId,
            //createWidget: createWidget,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            createWidgetTypeandId: createWidgetTypeandId
        };
        return api;

        function findWidgetsForPageId(pageId) {
            var id = pageId;
            var url = "/api/page/" + id + "/widget";
            return $http.get(url);
        }



        function createWidgetTypeandId(type, pageId) {
            console.log("this got called")
            var widget = {
                type: type,
                pageId:pageId
            };
           console.log("/api/page/"+pageId+"/widget");
            return $http.post("/api/page/"+pageId+"/widget", widget);

        }

        function findWidgetById(widgetId) {
            var url= "/api/widget/" + widgetId;
            console.log(url);
            return $http.get(url);
        }

        function updateWidget(widgetId, name, text, size, width, url) {
            var widget = {
                name: name,
                text: text,
                size:size,
                width:width,
                url:url

            };
            var url = "/api/widget/" + widgetId;
            return $http.put(url, widget);


        }

        function deleteWidget(widgetId) {
            var url= "/api/widget/" + widgetId;
            console.log(url);
            return $http.delete(url);

        }
    }
})();
