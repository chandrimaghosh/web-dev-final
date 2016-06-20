/**
 * Created by chandrimaghosh on 6/10/16.
 */

var mongoose = require("mongoose");

    module.exports = function() {


    var PageSchema = require("./page.schema.server")();
    var Page = mongoose.model("Page", PageSchema);

    var api = {
        createPage: createPage,
        findAllPagesForWebsite: findAllPagesForWebsite,
        findPageById:findPageById,
        updatePage:updatePage,
        deletePage:deletePage
    };
    return api;

    function createPage(websiteId, page){
        page._website= websiteId;

        return Page.create(page);
    }

    function findAllPagesForWebsite(websiteId) {
        return Page.find({_website: websiteId});
    }
     function findPageById(pageId){
          console.log("find pagebyid returs+"+Page.find({_id: pageId}));
          return Page.findOne({_id: pageId});
     }

    function updatePage(pageId, page)
    {
        console.log("model side pageid is "+pageId)
        delete page._id;
        return Page
            .update({_id: pageId},{
                $set: {
                    name: page.name,
                    title: page.title
                }
            });
    }

    function deletePage(pageId) {
        return Page.remove({_id: pageId});
    }

};