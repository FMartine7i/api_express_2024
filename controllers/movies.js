const getMovies = (req, res) => {
    res.json({ msg: 'movie controller' })
}

const getEstrenos = (req, res) => {
    res.json({ msg: 'estrenos controller' })
}

module.exports = {
    getMovies,
    getEstrenos
}