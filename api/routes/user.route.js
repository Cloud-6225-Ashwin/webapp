const { Router } = require("express");
const router = Router()
const users = require('../controllers/user.controller')

//Route to navigate to requests
router.post('/', users.create)
router.get('/:id', users.findOne)
router.put('/:id', users.update)

module.exports = router
