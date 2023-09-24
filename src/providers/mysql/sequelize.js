const sequelize = require("sequelize");

let db = new sequelize.Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        dialect: process.env.MYSQL_DIALECT
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