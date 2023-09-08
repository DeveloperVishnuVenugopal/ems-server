const express = require ('express');
const router = new express.Router();
const userController = require('../Controllers/userController');
const multerConfig = require('../middlewares/multermiddleware')
// Add User
router.post('/add',multerConfig.single('profile') ,userController.addUser)

// get allusers
router.get('/get-all-users',userController.getallUsers)

// delete
router.delete('/delete-user/:id',userController.deleteUser)

// edituser
router.put('/edit-user/:id',multerConfig.single('profile') ,userController.editUser)


module.exports = router