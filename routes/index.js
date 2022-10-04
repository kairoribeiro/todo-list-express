import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'


const router = Router()

/* GET home page. */
router.get('/', todosCtrl.index)

export { 
  router
}
