const { body } = require('express-validator/check')

const validate = (method) => {
    switch (method) {
        case 'registerUser': {
            return [
                body('username', 'userName doesn exists').exists(),
                body('email', 'Invalid email').exists(),
                body('password').exists()
            ]
        }
    }
}

module.exports = validate