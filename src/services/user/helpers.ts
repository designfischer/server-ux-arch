export function formatUserData(
    userEmail: string, 
    userEncryptedPass: string, 
    userRole: string, 
    firstName?: string, 
    lastName?: string) {
    return {
        userEmail,
        userPassword: userEncryptedPass,
        userRole,
        userInfo: {
            firstName,
            lastName
        }
    }
}

export function validatePasswordConfirmation(password: string, passwordConfirmation: string) {
    if (password !== passwordConfirmation) return false
    return true
}