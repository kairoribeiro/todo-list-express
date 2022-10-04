import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'


const router = Router()

/* GET home page. */
router.get('/', todosCtrl.index)

//GET localhost:3000/
router.get('/', todosCtrl.new)

//POST localhost:3000/
router.post('/', todosCtrl.create)

//DELETE localhost:3000/:id
router.delete('/:id', todosCtrl.delete)

export { 
  router
}
