const {Respond} = require('../utils/index')
const constants = require('../constants')

const Pong = async (req, res) => {
    Respond(req, res, constants.Pong, null)
}

module.exports = {
    Pong
}