/**
 * Created by chandrimaghosh on 6/8/16.
 */
module.exports = function() {
    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema({
        username: {type: String, required: true},
        password: String,
        firstName: String,
        facebook: {
            token: String,
            id: String,
            displayName: String
        },
        lastName: String,
        dob: Date,
        dateCreated: {type: Date, default: Date.now},
        websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Website'}]
    }, {collection: "assignment.user"});

    return UserSchema;
};

