import { Sequelize, DataTypes } from 'sequelize'

const user = (sequelize: Sequelize) => {
    return sequelize.define('users', {
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: DataTypes.STRING(30),
        },
        email: {
            type: DataTypes.STRING(30),
        }
    })
}

export default user