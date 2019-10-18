const express = require('express')
const router = express.Router()

const customerController = require('../app/controllers/customerController')
const departmentController = require('../app/controllers/departmentController')
const employeeController = require('../app/controllers/employeeController')
const ticketController = require('../app/controllers/ticketController')


router.get('/customers', customerController.list)
router.post('/customers',customerController.create)
router.get('/customers/:id',customerController.show)
router.delete('/customers/:id',customerController.destroy)
router.put('/customers/:id',customerController.update)

router.get('/departments', departmentController.list)
router.post('/departments',departmentController.create)
router.delete('/departments/:id', departmentController.destroy)

router.get('/employees',employeeController.list)
router.get('/employees/:id',employeeController.show)
router.post('/employees',employeeController.create)
router.delete('/employees/:id',employeeController.destroy)
router.put('/employees/:id',employeeController.update)

router.get('/tickets',ticketController.list)
router.post('/tickets',ticketController.create)
router.put('/tickets/:id', ticketController.update)


module.exports = router