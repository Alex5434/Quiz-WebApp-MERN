const express = require('express')
const router = express.Router()
const {
    loginUser,
    createUser,
    addCourse
} = require('../Controllers/JobControl')

router.route('/').post(loginUser)
router.route('/signup').post(createUser)
router.route('/dashboard/addcourse').post(addCourse)

module.exports = router 