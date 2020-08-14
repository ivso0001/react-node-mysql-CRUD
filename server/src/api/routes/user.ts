import * as express from 'express'
import { postUser, putUser, deleteUser, getUser, getUsers } from '../middlewares/user'
import { User } from '../../interfaces/user'

const USER = '/user'
const USERS = '/users'

const router = express.Router()

router.post(USER, async (req, res, next) => {
    try {
        const user: User = req.body
        const result = await postUser(user)
        res.json(result)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.put(USER + '/:userID', async (req, res, next) => {
    try {
        const user: User = req.body
        const userID: number = Number(req.params.userID)
        const result = await putUser(user, userID)
        res.json(result)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.delete(USER + '/:userID', async (req, res, next) => {
    try {
        const userID: number = Number(req.params.userID)
        const result = await deleteUser(userID)
        res.json(result)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.get(USER + '/:userID', async (req, res, next) => {
    try {
        const userID: number = Number(req.params.userID)
        const user = await getUser(userID)
        res.json(user)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.get(USERS, async (req, res, next) => {
    try {
        const users = await getUsers()
        res.json(users)
    } catch (e) {
        res.status(500).json(e)
    }
})

export default router