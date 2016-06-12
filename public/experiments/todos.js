
module.exports = function(app) {
    var mongoose = require("mongoose");
    var TodoSchema = mongoose.Schema({
        priority: Number,
        title: String,
        todo: String
    });
    var Todo = mongoose.model("Todo", TodoSchema);

    app.get("/api/todos", findAllTodos);
    app.put("/api/todos", reorderTodos);

    function reorderTodos(req, res) {
        var start = parseInt(req.query.start);
        var end = parseInt(req.query.end);
        console.log([start, end]);

        Todo.find(function(err, todos){
            todos.forEach(function(todo){
                if(start > end) {
                    if(todo.priority >= end && todo.priority < start) {
                        todo.priority++;
                        todo.save(function(){});
                    } else if(todo.priority === start) {
                        todo.priority = end;
                        todo.save(function(){});
                    }
                } else {
                    if(todo.priority > start && todo.priority <= end) {
                        todo.priority--;
                        todo.save(function(){});
                    } else if(todo.priority === start) {
                        todo.priority = end;
                        todo.save(function(){});
                    }
                }
            });
            res.send(200);
        });
    }

    function findAllTodos(req, res) {
        Todo.find()
            .then(function(todos){
                res.json(todos);
            });
    }

    // Todo.create({"priority": 1, "title": "CS5610","todo":"Teach Angular Directives"});
    // Todo.create({"priority": 2, "title": "CS5200","todo": "Data Modelling"});
    // Todo.create({"priority": 3, "title": "CS1500","todo": "Algorightms and Data Structures"});
    // Todo.create({"priority": 4, "title": "CS1600","todo": "Algorightms and Data Structures"});
    // Todo.create({"priority": 5, "title": "CS1700","todo": "Algorightms and Data Structures"});
    // Todo.create({"priority": 6, "title": "CS1800","todo": "Algorightms and Data Structures"});
    // Todo.create({"priority": 7, "title": "CS1900","todo": "Algorightms and Data Structures"});

}