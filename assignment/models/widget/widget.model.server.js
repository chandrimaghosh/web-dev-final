/**
 * Created by chandrimaghosh on 6/10/16.
 */
//referred webappmaker by jannunzi
var mongoose = require("mongoose");

module.exports = function() {

    var WidgetSchema = require("./widget.schema.server")();
    var Widget = mongoose.model("Widget", WidgetSchema);

    var api = {
        createWidget: createWidget,
        findAllWidgetsForPage: findAllWidgetsForPage,
        findWidgetById:findWidgetById,
        updateWidget:updateWidget,
        deleteWidget:deleteWidget,
        updateImageUrl:updateImageUrl,
        reorderWidget:reorderWidget,
        

    };
    return api;

    function createWidget(pageId, widget){
        widget._page=pageId;
        return Widget
            .findOne({_page: pageId})
            .sort('-order')
            .then(
                function (lastWidget) {

                    if (lastWidget) {
                        widget.order = ++lastWidget.order;
                    }
                    return Widget.create(widget);
                },
                function (error) {
                    console.log(error);
                }
            );
    }



        function findAllWidgetsForPage(pageId) {
        return Widget.find({_page: pageId});
    }
    function findWidgetById(widgetId){
        return Widget.findOne({_id: widgetId});
    }

    function updateWidget(widgetId, widget)
    {
        delete widget._id;
        return Widget
            .update({_id: widgetId},widget

            );
    }
function updateImageUrl(widgetId ,url) {
    return Widget.update({_id: widgetId},
        {
            $set: {
                url: url
            }
        }

        )

}


    
    function deleteWidget(widgetId) {
        return Widget.remove({_id: widgetId});
    }


    function reorderWidget( pageId, startIndex, endIndex) {
        console.log("database reached");
        startIndex = parseInt(startIndex);
        endIndex = parseInt(endIndex);

        return Widget
            .find()
            .then(
                function (widgets) {
                    widgets
                        .forEach(
                            function (widget) {
                                if (startIndex < endIndex) {
                                    if (widget.order < startIndex) {
                                    } else if (widget.order === startIndex) {
                                        widget.order = endIndex;
                                        widget.save(function (err, doc) {
                                        });
                                    } else if (widget.order > startIndex && widget.order <= endIndex) {
                                        widget.order--;
                                        widget.save(function (err, doc) {
                                        });
                                    } else if (widget.order > endIndex) {
                                    }
                                } else {
                                    if (widget.order < endIndex) {
                                    } else if (widget.order === startIndex) {
                                        widget.order = endIndex;
                                        widget.save(function (err, doc) {
                                        });
                                    } else if (widget.order < startIndex && widget.order >= endIndex) {
                                        widget.order++;
                                        widget.save(function (err, doc) {
                                        });
                                    } else if (widget.order > startIndex) {
                                    }
                                }
                            }
                        );
                },
                function (err) {
                }
            );
    }
};