import { Sequelize } from 'sequelize'
import getUserModel from '../../models/user'
import config from '../../config'
import { User } from '../../interfaces/user'

const sequelize = new Sequelize(config.database.name, config.database.user, config.database.password, {
    host: config.database.host,
    dialect: config.database.dialect
})

const userModel = getUserModel(sequelize)

const checkConnect = async () => {
    try {
        await sequelize.authenticate()
        return 'Connection has been established successfully.'
    } catch (error) {
        return 'Unable to connect to the database:'
    }
}

const postUser = async (user: User) => {
    try {
        await userModel.create(user)
        return Promise.resolve({ 'success': 1 })
    } catch (e) {
        return Promise.reject(e)
    }
}

const putUser = async (user: User, userID: number) => {
    try {
        await userModel.update(user, {
            where: { userID }
        })
        return Promise.resolve({ 'success': 2 })
    } catch (e) {
        return Promise.reject(e)
    }
}

const deleteUser = async (userID: number) => {
    try {
        await userModel.destroy({
            where: { userID }
        })
        return Promise.resolve({ 'success': 3 })
    } catch (e) {
        return Promise.reject(e)
    }
}

const getUser = async (userID: number) => {
    try {
        const user = await userModel.findOne({
            where: { userID }
        })
        return Promise.resolve(user)
    } catch (e) {
        return Promise.reject(e)
    }
}

const getUsers = async () => {
    const users = await userModel.findAll()
    return users
}

export { checkConnect, postUser, putUser, deleteUser, getUser, getUsers }