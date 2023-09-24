require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

const {connectDb} = require('./providers/mysql/sequelize')
const redisClient = require('./providers/redis/index')
const NotFoundHandler = require('./router/middlewares/notfoundhandler-middleware')

const v1routes = require('./router') 

app.set('trust proxy', 1)
app.use(helmet())
app.use(xss())
app.use(cors())
app.use(morgan())
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/api/v1', v1routes)
app.use(NotFoundHandler)

const start = async () => {
    try {
        await connectDb()
        await redisClient.connectRedis()
        let port = process.env.PORT || 3000
        var server = app.listen(port, () => {console.log("Server is listening on port: ", port)})

        process.on("SIGTERM", () => {
            server.close(() => { console.log("Closing Server") })
        })

    } catch (err) {
        console.log(err);
    }
} 

start()