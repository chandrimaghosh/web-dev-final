/**
 * Created by chandrimaghosh on 6/2/16.
 */
module.exports = function(app) {

    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
        { "_id": "678", "name": "Checkers",    "developerId": "123" },
        { "_id": "789", "name": "Chess",       "developerId": "234" }
    ];

    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);

    function createWebsite(req, res){
        var website = req.body;
        var newWebsite = {
            _id: (new Date()).getTime() + "",
            name: website.name,
            description: website.description,
            developerId: website.developerId
        };
        websites.push(newWebsite);
        res.send(newWebsite);

     
    }
    function findAllWebsitesForUser(req, res){
        var userId = req.params.userId;
        var result = [];
        for(var w in websites) {
            if(websites[w].developerId === userId) {
                result.push(websites[w]);
            }
        }
        res.json(result);
    }
    function findWebsiteById(req, res){
        var id = req.params.websiteId;
        for(var i in websites) {
            if(websites[i]._id === id) {
                res.send(websites[i]);
                return;
            }
        }
        res.send({});

    }
    function updateWebsite(req, res){
        var websiteId=req.params.websiteId;
        var newWebsite = req.body;
        console.log("websiteid in website server is"+websiteId);
        for (var i in websites) {
            if (websites[i]._id === websiteId) {
                websites[i].name =newWebsite.name;
                websites[i].description = newWebsite.description;
                res.send(200);
                return;

        }}
            res.send(400);


    }
    function deleteWebsite(req, res){
        console.log("deleted from server");
        var websiteId=req.params.websiteId;
        for (var i in websites) {
            if (websites[i]._id === websiteId) {
                websites.splice(i, 1);
                return true;
            }
        }
        return false;

    }
};
