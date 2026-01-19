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
  appoimentsController
} = require('../controller/index'); 

// ---------------- USER ----------------
router.post('/users', userController.Create);
// router.get('/users/:id', userController.findUser);
// router.put('/users/:id', userController.updateUser);
// router.delete('/users/:id', userController.deleteUser);

// ---------------- SUBSCRIPTION PLAN ----------------
router.post('/subscriptionplans', subscriptionplanController.createSubscriptionPlan);
router.get('/subscriptionplans/:id', subscriptionplanController.findSubscriptionPlan);
router.put('/subscriptionplans/:id', subscriptionplanController.updateSubscriptionPlan);
router.delete('/subscriptionplans/:id', subscriptionplanController.deleteSubscriptionPlan);

// ---------------- SERVICE ----------------
router.post('/services', serviceController.createService);
router.get('/services/:id', serviceController.findService);
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