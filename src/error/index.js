const BadRequestError = require('./bad-request')
const InternalServerError = require('./internal-server-error')
const UnauthorizedError = require('./unauthorized-request')
const DataNotFoundError = require('./data-not-found-error')

module.exports = {
    BadRequestError,
    InternalServerError,
    UnauthorizedError,
    DataNotFoundError
}