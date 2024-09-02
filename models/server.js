const express = require('express')

class Server {
    constructor() {
        this.app = express()
        this.routes()
        this.port = process.env.PORT || 3000
    }

    routes() {
        this.app.use('/api/v1/movies', require('../routes/movies'))
        this.app.use('/api/v1/employees', require('../routes/employees'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}

module.exports = Server