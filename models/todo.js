import mongoose from "mongoose";

const Schema = mongoose.Schema

const todoSchema = new Schema({
    todo: String,
    done: Boolean,
})

const Todo = mongoose.model('Todo', todoSchema)

export {
    Todo
}