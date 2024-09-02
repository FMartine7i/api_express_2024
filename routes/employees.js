const { Router } = require('express')
const { getEmployees } = require('../controllers/employees')
const routes = Router()

routes.get('/', getEmployees)

module.exports = routes