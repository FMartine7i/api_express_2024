const { Router } = require('express')
const { getMovies, getEstrenos } = require('../controllers/movies')
const routes = Router()

routes.get('/', getMovies)
routes.get('/estrenos', getEstrenos)

module.exports = routes