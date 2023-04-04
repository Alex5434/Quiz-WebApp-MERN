const express = require('express')
const router = express.Router()
const {
    loginUser,
    createUser
} = require('../Controllers/JobControl')

router.route('/').post(loginUser)
router.route('/signup').post(createUser)

module.exports = router 