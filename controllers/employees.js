let axios = require('axios');

const getEmployees = (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            res.status(200).json({
                msg: 'Todo OK',
                data: response.data
            })
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

module.exports = {
    getEmployees
}