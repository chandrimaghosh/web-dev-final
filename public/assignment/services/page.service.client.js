/**
 * Created by chandrimaghosh on 5/26/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    var pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456" },
        { "_id": "432", "name": "Post 2", "websiteId": "456" },
        { "_id": "543", "name": "Post 3", "websiteId": "456" }
    ];


    function PageService() {
        var api = {
            createPage: createPage,
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById:findPageById,
            updatePage: updatePage,
            deletePage:deletePage
        };
        return api;
    }

    function findPageByWebsiteId(websiteID) {
            var resultSet = [];
        for(var i in pages) {
            if(pages[i].websiteId === websiteID) {
                resultSet.push(pages[i]);
            }
        }
        return resultSet;
    }

    function createPage(websiteID, name,title) {

        var newPage = {
            _id: (new Date()).getTime()+"",
            name: name,
            title:title,
            websiteId: websiteID
        };
        pages.push(newPage);
        console.log("whats this new page"+newPage._id);
        console.log("whats this new page"+newPage.name);
        console.log("whats this new page"+newPage.websiteID)
        console.log("pages after push"+pages.length)

        return newPage;
    }

    function findPageById(pageId) {
        var resultSet = [];
        for(var i in pages) {
            if(pages[i]._id === pageId) {
                return pages[i];
            }
        }
        return null;
    }


    function updatePage(pageId, name,title) {
        for(var i in pages) {
            if(pages[i]._id === pageId) {
                pages[i].name = name;
                pages[i].title=title;
                return true;
            }
        }
        return false;
    }


    function deletePage(pageId) {
        for(var i in pages) {
            if(pages[i]._id === pageId) {
                pages.splice(i, 1);

                return true;
            }
        }
        return false;
    }
})();