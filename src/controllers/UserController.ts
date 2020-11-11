import { Request, Response } from 'express'
import { 
    createUserService, 
    findUserByEmailService, 
    findAllUsersService,
    deleteUserByEmailService,
    updateUserByEmailService
} from '../services/user'

export default {
    async create(req: Request, res: Response) {
        const { body } = req
        const response = await createUserService(body)
        return res.status(response.status).json(response.data)        
    },

    async findUserByEmail(req: Request, res: Response) {
        const { user_email } = req.params        
        const response = await findUserByEmailService(user_email)
        return res.status(response.status).json(response.data)        
    },

    async findAllUsers(req: Request, res: Response) {
        const response = await findAllUsersService()
        return res.status(response.status).json(response.data)
    },

    async deleteByEmail(req: Request, res: Response) {
        const { user_email } = req.params
        const response = await deleteUserByEmailService(user_email)
        return res.status(response.status).json(response.data)
    },

    async updateByEmail(req: Request, res: Response) {
        const { user_email } = req.params
        const { body } = req
        const response = await updateUserByEmailService(user_email, body)
        return res.status(response.status).json(response.data)
    }
}