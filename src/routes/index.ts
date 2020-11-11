import { Router } from 'express'
import UserController from '../controllers/UserController'

const routes = Router()

routes.get('/', (req, res) => res.send('API - UXArch v1'))

routes.post('/users', UserController.create)
routes.get('/users', UserController.findAllUsers)
routes.get('/users/:user_email', UserController.findUserByEmail)
routes.delete('/users/:user_email', UserController.deleteByEmail)
routes.patch('/users/:user_email', UserController.updateByEmail)

export default routes