class DataNotFoundError extends Error {
    constructor(message) {
        super(message)

        this.statusCode = 400
        this.description = message
        this.code = "DATA_NOT_FOUND"
    }
}

module.exports = DataNotFoundError