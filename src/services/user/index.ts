import { response } from 'express'
import User from '../../database/models/User'

import { formatResponse } from '../../helpers'
import { encrypt } from '../../helpers/bcryptjs'
import { formatUserData, validatePasswordConfirmation } from './helpers'

export async function createUserService(request: IUserRequest) { 
    const { userEmail, userPassword, userPasswordConfirmation, userRole, firstName, lastName } = request

    const isPasswordConfirmed = validatePasswordConfirmation(userPassword, userPasswordConfirmation)
    if (!isPasswordConfirmed) return formatResponse(400, { message: 'Passwords must match' })

    try {
        const hashedPassword = await encrypt(userPassword)

        const hasUser = await User.findOne({ userEmail: userEmail })
        if (hasUser) return formatResponse(409, { message: 'User already exists' })

        const user = await User.create(formatUserData(
            userEmail,
            hashedPassword,
            userRole,
            firstName,
            lastName            
        ))
        return formatResponse(201, user)
    } catch(err) {
        return formatResponse(500, err)
    }
}

export async function findUserByEmailService(userEmail: string) {
    const email = userEmail    
    try {
        const user = await User.findOne({ userEmail: email })
        if (!user) return formatResponse(404, { message: 'User not found' })
        return formatResponse(200, user)
    } catch(err) {
        return formatResponse(500, err)
    }
}

export async function findAllUsersService() {
    try {
        const users = await User.find()
        return formatResponse(200, users)
    } catch(err) {
        return formatResponse(500, err)
    }
}

export async function deleteUserByEmailService(userEmail: string) {
    const email = userEmail
    try {
        const deletedUser = await User.findOneAndDelete({ userEmail: email })
        if (!deletedUser) return formatResponse(404, { message: 'User not found' })
        return formatResponse(200, { message: 'User deleted successfully', deletedUser })
    } catch(err) {
        return formatResponse(500, err)
    }
}

export async function updateUserByEmailService(user: string, body: IUserRequest) {
    const { userEmail, userPassword, userPasswordConfirmation } = body

    const isPasswordConfirmed = validatePasswordConfirmation(userPassword, userPasswordConfirmation)
    if (!isPasswordConfirmed) return formatResponse(400, { message: 'Passwords must match' })
       
    try {
        const hasUser = await User.findOne({ userEmail })
        if (hasUser) return formatResponse(409, { message: 'User already exists' })

        let updatedUser = undefined   
        let hashedPassword = undefined

        if (userPassword && userPasswordConfirmation) hashedPassword = await encrypt(userPassword)

        if (hashedPassword) {
            updatedUser = await User.findOneAndUpdate({ userEmail: user }, {
                ...body,
                userPassword: hashedPassword                
            }, { new: true })
        } else {
            updatedUser = await User.findOneAndUpdate({ userEmail: user }, body, { new: true })
        }
                
        if (!updatedUser) return formatResponse(404, { message: 'User not found' })

        return formatResponse(200, updatedUser)
    } catch(err) {
        return formatResponse(500, err)
    }
}