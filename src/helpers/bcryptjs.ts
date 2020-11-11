import bcrypt from 'bcryptjs'

const SALT_ROUNDS = 10

export async function encrypt(password: string) {
    const salt = await bcrypt.genSalt(SALT_ROUNDS)
    const encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    return encryptedPassword
}