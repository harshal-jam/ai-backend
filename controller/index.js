// controller/index.js

import * as userController from './userController.js';
import * as subscriptionplanController from './subscriptionplanController.js';
import * as serviceController from './serviceController.js';
import * as notificationController from './notificationController.js';
import * as employeeslotsController from './employeeslotsController.js';
import * as employeeController from './employeeController.js';
import * as companysubscriptionController from './companysubscriptionController.js';
import * as chatbotconversationController from './chatbotconversationController.js';
import * as chatbotController from './chatbotController.js';
import * as bussinessController from './bussinessController.js';
import * as appoimentsController from './appoimentsController.js';
import * as categoryController from './categoryController.js';

// ✅ STAFF CONTROLLER - Make sure this is exported correctly
import * as staffController from './staffController.js';

export {
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
  staffController,  // ✅ This must be here
};