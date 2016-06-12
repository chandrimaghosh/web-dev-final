/**
 * Created by chandrimaghosh on 6/3/16.
 */
module.exports = function(app,models) {

    var pageModel=models.pageModel;
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



        pageModel
            .createPage(websiteId, page)
            .then(
                function (page) {
                    res.json(page);
                },
                function (error) {
                    res.status(400).send(error);
                }
            )


    }
    function findAllPagesForWebsite(req, res){
        var websiteId=req.params.websiteId;
        pageModel.
        findAllPagesForWebsite(websiteId)
            .then(function (pages) {

                res.json(pages);
            },function (error) {
                res.statusCode(400).send();

            })
    }

    function findPageById(req, res){
        var pageId=req.params.pageId;

       console.log("findpagebyIdcalled"+pageId);
        pageModel
            .findPageById(pageId)
            .then(
                function(page) {
                    res.send(page);
                },
                function(error) {
                    res.statusCode(404).send(error);
                }
            );

    }



    function updatePage(req, res){
        var pageId=req.params.pageId;
        var newpage = req.body;
      pageModel.updatePage(pageId,newpage)
      .then(
            function(stats) {
                console.log("update page logs")
                console.log(stats);
                res.send(200);
            },
            function(error) {
                res.statusCode(404).send(error);
            }
        );


    }


    function deletePage(req, res){


        var pageId=req.params.pageId;
        console.log("pageid from delete+"+pageId)

        pageModel.deletePage(pageId)

            .then(
                function(stats) {
                    console.log(stats);
                    res.send(200);
                },
                function(error) {
                    res.statusCode(404).send(error);
                }
            );

    }
};

