import { genSalt, hash, compare } from 'bcryptjs'

const helpers = {}

helpers.encryptPassword = async (password) => {
    const salt = await genSalt(10)
    const hashedPassword = await hash(password, salt)
    return hashedPassword
}

helpers.matchPassword = async (password, savedPassword) => {
    try {
        return await compare(password, savedPassword)
    } catch (error) {
        console.error(error)
        return false
    }
}

export default helpers