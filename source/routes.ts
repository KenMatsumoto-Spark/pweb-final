import { Router } from 'express'
import controllers from './controllers'

const app = Router()
app.use('/', controllers.MainController)

export default app
