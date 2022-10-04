import { Todo } from '../models/todo.js'

function index(req, res) {
Todo.find({})
.then(todos => {
    res.render('index', {
        todos: todos
    })
})
.catch(error => {
    console.log(error);
    res.redirect('/')
})
}

export {
    index
}