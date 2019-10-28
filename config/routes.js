const express = require('express')
const router = express.Router()

const customerController = require('../app/controllers/customerController')
const departmentController = require('../app/controllers/departmentController')
const employeeController = require('../app/controllers/employeeController')
const ticketController = require('../app/controllers/ticketController')
const userController = require('../app/controllers/userController')
const {authenticateUser} = require('../middlewares/authenticattion')


router.post('/users/registor',userController.registor)
router.post('/users/login',userController.login)
router.get('/users/account',authenticateUser,userController.account)
router.delete('/users/logout',authenticateUser,userController.logout)
// router.get('/users/redirect',userController.redirect)

router.get('/customers',authenticateUser, customerController.list)
router.post('/customers',authenticateUser,customerController.create)
router.get('/customers/:id',authenticateUser,customerController.show)
router.delete('/customers/:id',authenticateUser,customerController.destroy)
router.put('/customers/:id',authenticateUser,customerController.update)

router.get('/departments',authenticateUser, departmentController.list)
router.post('/departments',authenticateUser,departmentController.create)
router.delete('/departments/:id',authenticateUser, departmentController.destroy)

router.get('/employees',authenticateUser,employeeController.list)
router.get('/employees/:id',authenticateUser,employeeController.show)
router.post('/employees',authenticateUser,employeeController.create)
router.delete('/employees/:id',authenticateUser,employeeController.destroy)
router.put('/employees/:id',authenticateUser,employeeController.update)

router.get('/tickets',authenticateUser,ticketController.list)
router.post('/tickets',authenticateUser,ticketController.create)
router.put('/tickets/:id',authenticateUser, ticketController.update)
router.delete('/tickets/:id',authenticateUser,ticketController.destroy)


module.exports = router