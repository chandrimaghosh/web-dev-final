/**
 * Created by chandrimaghosh on 6/10/16.
 */
module.exports = function() {
    var mongoose = require("mongoose");

    var WidgetSchema = mongoose.Schema({
        _page: { type: mongoose.Schema.Types.ObjectId, ref: 'Page' },
        name : String,

        type: String,
        //{type: String, enum: ['HEADER', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT']},

        text : String,

        placeholder: String,

        description: String,

        url: String,

        width: String,

        height: String,
        rows: Number,

        size: Number,

        class: String,
        icon: String,

        deletable: Boolean,

        formatted:Boolean,

        dateCreated : {type : Date, default: Date.now}
    }, {collection: "assignment.widget"});

    return WidgetSchema;
};