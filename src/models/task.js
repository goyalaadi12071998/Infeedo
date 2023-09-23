const {DataTypes} = require('sequelize')
const db = require('../providers/mysql/sequelize')
const sequelize = db.getDb()

const Task = sequelize.define('tasks', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
    }
})

module.exports = Task