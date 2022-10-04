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

function newTodo(req, res) {
    res.render('index')
}


function create(req, res) {
Todo.create(req.body)
.then(todo => {
    res.redirect('/')
})
.catch(error => {
    console.log(error);
    res.redirect('/')
})
}

export {
    index,
    newTodo as new,
    create,
}