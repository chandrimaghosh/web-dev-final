
var mongoose = require("mongoose");

module.exports = function() {

    var WebsiteSchema = require("./website.schema.server")();
    var Website = mongoose.model("Website", WebsiteSchema);

    var api = {
        createWebsite: createWebsite,
        findAllWebsitesForUser: findAllWebsitesForUser,
        findWebsiteById:findWebsiteById,
        updateWebsite:updateWebsite,
        deleteWebsite:deleteWebsite
    };
    return api;

    function createWebsite(userId, website) {

        website._user = userId;
        return Website.create(website);
    }

    function findAllWebsitesForUser(userId) {
        return Website.find({_user: userId});
    }

    function findWebsiteById(websiteId){
        console.log(websiteId+" is in the model")
        return Website.findOne({_id: websiteId});
    }

    function updateWebsite(websiteId, website)
    {
        delete website._id;
        return Website
            .update({_id: websiteId},
                website
            );
    }

    function deleteWebsite(websiteId) {
        return Website.remove({_id: websiteId});
    }
};
