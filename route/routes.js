const express = require('express');
const router = express.Router();

const {
  userController,
  subscriptionplanController,
  serviceController,
  notificationController,
  employeeslotsController,
  employeeController,
  companysubscriptionController,
  chatbotconversationController,
  chatbotController,
  bussinessController,
  appoimentsController,
  categoryController,
  staffController
} = require('../controller/index'); 
const auth = require('../middleware/auth')
// ---------------- USER ----------------
router.post('/users', userController.Signup);
router.post('/login', userController.Login);
// ---------------- CATEGORY ----------------
router.post('/category',auth,categoryController.Create);
router.get('/category/:id',auth,categoryController.find);
router.put('/category/:id',auth,categoryController.update);
router.delete('/category/:id',auth,categoryController.delete);
//-----------------------staff-------------
router.post('/staff', auth, staffController.createStaff);      // Add New
router.get('/staff/:id', auth, staffController.getAllStaff);       // Table Listing
router.put('/staff/:id', auth, staffController.updateStaff);   // Edit
router.delete('/staff/:id', auth, staffController.deleteStaff);// Delete
// ---------------- SUBSCRIPTION PLAN ----------------
router.post('/subscriptionplans', subscriptionplanController.createSubscriptionPlan);
router.get('/subscriptionplans/:id', subscriptionplanController.findSubscriptionPlan);
router.put('/subscriptionplans/:id', subscriptionplanController.updateSubscriptionPlan);
router.delete('/subscriptionplans/:id', subscriptionplanController.deleteSubscriptionPlan);
// ---------------- SERVICE ----------------
router.post('/services',auth, serviceController.createService);
router.get('/services', serviceController.findService);
router.put('/services/:id', serviceController.updateService);
router.delete('/services/:id', serviceController.deleteService);

// ---------------- NOTIFICATION ----------------
router.post('/notifications', notificationController.createNotification);
router.get('/notifications/:id', notificationController.findNotification);
router.put('/notifications/:id', notificationController.updateNotification);
router.delete('/notifications/:id', notificationController.deleteNotification);

// ---------------- EMPLOYEE SLOTS ----------------
router.post('/employeeslots', employeeslotsController.createEmployeeSlot);
router.get('/employeeslots/:id', employeeslotsController.findEmployeeSlot);
router.put('/employeeslots/:id', employeeslotsController.updateEmployeeSlot);
router.delete('/employeeslots/:id', employeeslotsController.deleteEmployeeSlot);

// ---------------- EMPLOYEE ----------------
router.post('/employees', employeeController.createEmployee);
router.get('/employees/:id', employeeController.findEmployee);
router.put('/employees/:id', employeeController.updateEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);

// ---------------- COMPANY SUBSCRIPTION ----------------
router.post('/companysubscriptions', companysubscriptionController.createCompanySubscription);
router.get('/companysubscriptions/:id', companysubscriptionController.findCompanySubscription);
router.put('/companysubscriptions/:id', companysubscriptionController.updateCompanySubscription);
router.delete('/companysubscriptions/:id', companysubscriptionController.deleteCompanySubscription);

// ---------------- CHATBOT CONVERSATION ----------------
router.post('/chatbotconversations', chatbotconversationController.createConversation);
router.get('/chatbotconversations/:id', chatbotconversationController.findConversation);
router.put('/chatbotconversations/:id', chatbotconversationController.updateConversation);
router.delete('/chatbotconversations/:id', chatbotconversationController.deleteConversation);

// ---------------- CHATBOT ----------------
router.post('/chatbots', chatbotController.createChatbot);
router.get('/chatbots/:id', chatbotController.findChatbot);
router.put('/chatbots/:id', chatbotController.updateChatbot);
router.delete('/chatbots/:id', chatbotController.deleteChatbot);

// ---------------- BUSINESS ----------------
router.post('/businesses', bussinessController.createBusiness);
router.get('/businesses/:id', bussinessController.findBusiness);
router.put('/businesses/:id', bussinessController.updateBusiness);
router.delete('/businesses/:id', bussinessController.deleteBusiness);

// ---------------- APPOINTMENTS ----------------
router.post('/appointments', appoimentsController.createAppointment);
router.get('/appointments/:id', appoimentsController.findAppointment);
router.put('/appointments/:id', appoimentsController.updateAppointment);
router.delete('/appointments/:id', appoimentsController.deleteAppointment);

module.exports = router;