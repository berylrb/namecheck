import { Router } from 'express'
import * as namesCtrl from '../controllers/names.js'

const router = Router()

/* GET users listing. */
router.get('/', namesCtrl.index)

export {
  router
}
