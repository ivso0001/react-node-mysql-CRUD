import axios from 'axios'
import { User, UserInput } from '../interfaces/user'

const USER = 'user'
const USERS = 'users'

export const postUser = async (user: UserInput): Promise<number> => {
    try {
        const response = await axios.post(process.env.SERVER_BASE_URL + USER, user)
        return Promise.resolve(response.status)
    } catch (e) {
        return Promise.reject(e)
    }
}

export const putUser = async (user: UserInput, userID: number): Promise<number> => {
    try {
        const response = await axios.put(process.env.SERVER_BASE_URL + USER + '/' + userID, user)
        return Promise.resolve(response.status)
    } catch (e) {
        return Promise.reject(e)
    }
}

export const deleteUser = async (userID: number): Promise<number> => {
    try {
        const response = await axios.delete(process.env.SERVER_BASE_URL + USER + '/' + userID)
        return Promise.resolve(response.status)
    } catch (e) {
        return Promise.reject(e)
    }
}

export const getUser = async (userID: number): Promise<User> => {
    try {
        const response = await axios.get(process.env.SERVER_BASE_URL + USER + '/' + userID)
        const user: User = response.data
        return Promise.resolve(user)
    } catch (e) {
        return Promise.reject(e)
    }
}

export const getUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get(process.env.SERVER_BASE_URL + USERS)
        const users: User[] = response.data
        return Promise.resolve(users)
    } catch (e) {
        return Promise.reject(e)
    }
}