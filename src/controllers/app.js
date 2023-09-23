const {Respond} = require('../utils/index')

const Pong = async (req, res) => {
    Respond(req, res, "Pong", null)
}

module.exports = {
    Pong
}