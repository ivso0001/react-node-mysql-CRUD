import * as express from 'express'
import config from './config'
import routes from './api/routes'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")
    next()
})

app.use(routes);

app.get('/', (req, res) => {
    res.send('branch connect server')
})

app.listen(config.port)