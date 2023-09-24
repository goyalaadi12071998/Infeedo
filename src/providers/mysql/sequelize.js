const sequelize = require("sequelize");

let db = new sequelize.Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DIALECT
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