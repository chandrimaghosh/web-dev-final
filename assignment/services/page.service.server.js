/**
 * Created by chandrimaghosh on 6/3/16.
 */
module.exports = function(app) {


    var pages = [
        {"_id": "321", "name": "Post 1", "websiteId": "456"},
        {"_id": "432", "name": "Post 2", "websiteId": "456"},
        {"_id": "543", "name": "Post 3", "websiteId": "456"}
    ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);


    function createPage(req, res){
        var websiteId=req.params.websiteId;

        var page = req.body;
        var newpage = {
            _id: (new Date()).getTime() + "",
            name: page.name,
            title: page.title,
            websiteId: page.websiteId
        };
        pages.push(newpage);
        res.send(newpage);


    }
    function findAllPagesForWebsite(req, res){
        var websiteId=req.params.websiteId;
        var result = [];
        for(var w in pages) {
            if(pages[w].websiteId === websiteId) {
                result.push(pages[w]);
            }
        }
        res.json(result);
    }
    function findPageById(req, res){
        var pageId=req.params.pageId;

        console.log("pageId from server"+pageId);
        for(var i in pages) {
            if(pages[i]._id === pageId) {
                res.send(pages[i]);
                return;
            }
        }
        res.send({});

    }



    function updatePage(req, res){
        var pageId=req.params.pageId;
        var newpage = req.body;
        for (var i in pages) {
            if (pages[i]._id === pageId) {
                pages[i].name =newpage.name;
                pages[i].title = newpage.title;
                res.send(200);
                return;

            }}
        res.send(400);

    }
    function deletePage(req, res){
        console.log("pageid from delete+"+pageId)

        var pageId=req.params.pageId;

        for (var i in pages) {
            if (pages[i]._id === pageId) {
                pages.splice(i, 1);
                res.send(200);
                return;
            }
        }
        res.send(400);

    }
};

