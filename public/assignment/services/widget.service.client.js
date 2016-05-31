/**
 * Created by chandrimaghosh on 5/26/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);
    var widgets = [
        {"_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        {"_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        {
            "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "http://lorempixel.com/400/200/"
        },
        {
            "_id": "456",
            "widgetType": "HTML",
            "pageId": "321",
            "text": '<p class="first-text">Investing in undersea internet cables has been a <a href="http://gizmodo.com/why-more-technology-giants-are-paying-to-lay-their-own-1703904291">big part of data strategy </a>plans for tech giants in recent years. Now Microsoft and Facebook are teaming up for the mother of all cables: A 4,100-mile monster that can move 160 Tbps, which will make it the highest-capacity cable on Earth. The cable even has a name, MAREA, and it will break ground (break waves?) later this year. Hopefully it can handle all your selfies.</p>'
        },
        {"_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        {
            "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E"
        },
        {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];

    function WidgetService() {
        var api = {
            findWidgetsForPageId: findWidgetsForPageId,
            createWidget: createWidget,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            createWidgetTypeandId: createWidgetTypeandId
        };
        return api;

        function findWidgetsForPageId(pageId) {
            var resultSet = [];
            for (var i in widgets) {
                if (widgets[i].pageId === pageId) {
                    if((widgets[i].widgetType==="YOUTUBE"||widgets[i].widgetType==="IMAGE") &&( !("width" in widgets[i])|| (widgets[i].url==="")))
                    {console.log("happened")}
                     else if(widgets[i].widgetType==="HEADER" && !("size" in widgets[i]))
                     {}
                    else
                    {resultSet.push(widgets[i]);}

                }
            }
            return resultSet;
        }

        function createWidget(name, text, size, width, url) {
            var newWidget = {
                _id: (new Date()).getTime() + "",
                name: name,
                text: title,
                size: size,
                width: width,
                url: url
            };
            widgets.push(newWidget);
            return newWidget;
        }

        function createWidgetTypeandId(type, pageId) {
            var newWidget = {
                _id: (new Date()).getTime() + "",
                widgetType: type,
                pageId: pageId
            };
            widgets.push(newWidget);
            return newWidget._id;
        }

        function findWidgetById(widgetId) {
            var resultSet = [];
            for (var i in widgets) {
                if (widgets[i]._id === widgetId) {
                    return widgets[i];
                }
            }
            return null;
        }

        function updateWidget(widgetId, name, text, size, width, url) {
            for (var i in widgets) {
                if (widgets[i]._id === widgetId) {
                    widgets[i].name = name;
                    widgets[i].text = text;
                    widgets[i].size = size;
                    widgets[i].width = width;
                    widgets[i].url = url;
                    return true;
                }
            }
            return false;
        }

        function deleteWidget(widgetId) {
            console.log("deleted");
            for (var i in widgets) {
                if (widgets[i]._id === widgetId) {
                    widgets.splice(i, 1);
                    return true;
                }
            }
            return false;
        }
    }
})();
