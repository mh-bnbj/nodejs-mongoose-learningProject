const httpStatusCodes = require('http-status-codes')

class BaseController {
    constructor(repoClass) {
        this.repo = new repoClass()
    }

    //common response methods
    ok(res, data) {
        if (!!data) return res.status(httpStatusCodes.OK).send(data)
        else return res.status(httpStatusCodes.OK).send({ message: 'OK' })
    }
    internalServerError(res, error) {
        return res
            .status(httpStatusCodes.internalServerError)
            .send({ message: 'Internal Server Error', error: error })
    }

    //common db operations
    getAll = async (req, res) => {
        this.repo
            .findAll()
            .then((docs) => {
                return this.ok(res, docs)
            })
            .catch((err) => {
                return this.internalServerError(res, err)
            })
    }
    add = (req, res) => {
        const body = req.body

        this.repo
            .create(body)
            .then((doc) => {
                return res.status(httpStatusCodes.CREATED).send(doc)
            })
            .catch((err) => {
                return this.internalServerError(res, err)
            })
    }

    update = (req, res) => {
        const body = req.body

        this.repo
            .update(body)
            .then((doc) => {
                return this.ok(res, doc)
            })
            .catch((err) => {
                return this.internalServerError(res, err)
            })
    }
    deleteById = (req, res) => {
        let id = req.params.id

        this.repo
            .deleteById(id)
            .then((doc) => {
                return this.ok(res, doc)
            })
            .catch((err) => {
                return this.internalServerError(res, err)
            })
    }
    getById = (req, res) => {
        let id = req.params.id

        this.repo
            .findById(id)
            .then((doc) => {
                return this.ok(res, doc)
            })
            .catch((err) => {
                return this.internalServerError(res, err)
            })
    }
}

module.exports = BaseController
