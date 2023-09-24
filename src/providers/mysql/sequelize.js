const sequelize = require("sequelize");

let db = new sequelize.Sequelize(
    'infeedo_tasks',
    'root',
    'password',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);


const connectDb = async () => {
    try {
        await db.authenticate()
        await db.sync()
        dbclient = db
    } catch (err) {
        throw err
    }
}

const getDb = () => {
    return db
}

module.exports = {connectDb, getDb}