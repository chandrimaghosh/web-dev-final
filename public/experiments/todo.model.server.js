/**
 * Created by chandrimaghosh on 6/12/16.
 */
module.exports = function() {

    var mongoose = require("mongoose");
    var TodoSchema = mongoose.Schema({
        title: String,
        description: String,
        order: {type: Number, default: 0}
    }, {collection: "experiments.todo"});
    var Todo = mongoose.model("Todo", TodoSchema);

    var api = {
        createTodo: createTodo,
        findAllTodos: findAllTodos,
        reorderTodos: reorderTodos,
        removeTodo: removeTodo
    };
    return api;

    function findAllTodos() {
        return Todo.find();
    }

    function createTodo(todo) {
        return Todo.create(todo);
    }

    function removeTodo(todoId) {
        return Todo.findById(todoId).remove();
    }

    function reorderTodos(start, end) {
        return Todo.find(function(err, todos){
            todos.forEach(function(todo){
                console.log(todo);
                if(start < end) {
                    if(todo.order === start) {
                        todo.order = end;
                        todo.save();
                    } else if(todo.order > start && todo.order <= end) {
                        todo.order--;
                        todo.save();
                    }
                } else {

                }
            })
        })
    }
};