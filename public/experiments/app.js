/**
 * Created by chandrimaghosh on 6/12/16.
 */
module.exports = function(app) {

    app.get("/api/experiments/todo", findAllTodos);
    app.post("/api/experiments/todo", createTodo);
    app.put("/api/experiments/todo/order", reorderTodos)

    var todoModel = require("./todo.model.server")();

    function reorderTodos(req, res) {
        var start = req.query.start;
        var end   = req.query.end;
        todoModel.reorderTodos(start, end).then(function(todo){
            findAllTodos(req, res);
        });
    }

    function createTodo(req, res) {
        todoModel.createTodo(req.body).then(function(todo){
            findAllTodos(req, res);
        });
    }

    function findAllTodos(req, res) {
        todoModel.findAllTodos().then(function(todos) {
            res.json(todos);
        });
    }
}