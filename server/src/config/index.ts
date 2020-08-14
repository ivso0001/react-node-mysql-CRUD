import * as dotenv from 'dotenv'
const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("Couldn't find .env file")
}

const { PORT, DB_PORT, DB_HOST, DB_NAME, DB_DIALECT, DB_USER, DB_PASSWORD } = process.env

const env = {
    port: PORT,
    database: {
        port: DB_PORT,
        host: DB_HOST,
        name: DB_NAME,
        dialect: DB_DIALECT,
        user: DB_USER,
        password: DB_PASSWORD,
    }
}

export default env