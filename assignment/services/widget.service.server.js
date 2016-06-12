/**
 * Created by chandrimaghosh on 6/3/16.
 */
module.exports = function(app,models) {

    var widgetModel=models.widgetModel;

    var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: __dirname+'/../../public/uploads' });




    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);

    app.post ("/api/upload", upload.single('myFile'), uploadImage);



    function createWidget(req, res){
        var widget = req.body;
        var pageId=widget.pageId;

        console.log("why is type not going ?"+widget.type)
       
        var newWidget = {
            type: widget.type,
            pageId: widget.pageId
        };

        widgetModel
            .createWidget(pageId,newWidget)
            .then(
                function (widget) {
                    res.json(widget);
                },
                function (error) {
                    res.status(400).send(error);
                }
            )
    }

    function findAllWidgetsForPage(req, res){
        var pageId = req.params.pageId;
        var result=[];

        widgetModel.findAllWidgetsForPage(pageId)
            .then(function (widgets) {

                res.json(widgets);


            },function (error) {
                res.statusCode(400).send();

            })


    }


    function findWidgetById(req, res){
        var widgetId=req.params.widgetId;
        widgetModel.findWidgetById(widgetId)

            .then(function (widget) {

                res.send(widget);

            },function (error) {
                res.statusCode(400).send();

            });

    }

    function updateWidget(req, res){

        var widgetId=req.params.widgetId;
        var newWidget = req.body;
        widgetModel
            .updateWidget(widgetId, newWidget)
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
    function deleteWidget(req, res){
        var widgetId=req.params.widgetId;
        widgetModel.deleteWidget(widgetId)

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

    function uploadImage(req, res) {
        var myFile = req.file;
        var pageId = req.body.pageId;
        var websiteId = req.body.websiteId;
        var widgetId = req.body.widgetId;

        var userId = req.body.userId;
        if (myFile == null) {
            res.redirect("/assignment/#/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
            return;
        }
        else {



        var width = req.body.width;
            var myFile = req.file;

        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        var path = myFile.path;         // full path of uploaded file
        var destination = myFile.destination;  // folder where file is saved to
        var size = myFile.size;
        var mimetype = myFile.mimetype;



            var url="/uploads/" + filename;


            widgetModel
                .updateImageUrl(widgetId, url)
                .then(
                    function(stats) {
                        console.log(stats);
                        res.redirect("/assignment/#/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);

                    },
                    function(error) {
                        res.statusCode(404).send(error);
                    }
                );
        }
    }
};