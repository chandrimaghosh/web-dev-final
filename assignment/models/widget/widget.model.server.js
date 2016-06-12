/**
 * Created by chandrimaghosh on 6/10/16.
 */
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
        updateImageUrl:updateImageUrl
    };
    return api;

    function createWidget(pageId, widget){
        widget._page= pageId;
        return Widget.create(widget);
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

};