import express from 'express';
import {
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
} from '../controller/index.js';
import auth from '../middleware/auth.js';
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

/* Gemini Config */
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/* AI Route */
router.post("/ai/generate", async (req, res) => {
  try {
    const { prompt, systemint } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }
    const msg = prompt.toLowerCase();
    if (msg.includes("appointments") ||
      msg.includes("booking") ||
      msg.includes("book") ||
      msg.includes("demo") ||
      msg.includes("consultation")) {
      return res.status(200).json({
        success: true,
        url: "/bookingsystem",
        result: "To book an appointment...............................",
        showBookingButton: true
      })
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      systemInstruction: systemint,
      contents: prompt,
    });

    res.json({
      success: true,
      result: response.text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "AI generation failed",
    });
  }
});

// ---------------- USER ----------------
router.post('/users', userController.Signup);
router.post('/login', userController.Login);

// ---------------- CATEGORY ----------------
router.post('/category', auth, categoryController.Create);
router.get('/category/:id', auth, categoryController.find);
router.put('/category/:id', auth, categoryController.update);
router.delete('/category/:id', auth, categoryController.deleteCategory);

// ========================================
// 🔥 STAFF ROUTES - FINAL FIX!
// ========================================

// ✅ PUBLIC routes FIRST (NO auth needed)
router.get("/staff/by-service", staffController.getbyservice);

// ✅ SPECIFIC /staff routes with params (BEFORE generic /staff/:id)
router.get("/staff/user/:userid", auth, staffController.getAllStaff);    // 🔥 NEW - Get all staff by userid
router.get("/staff/:id/working-hours", staffController.getStaffWorkingHours);

// ✅ CRUD routes
router.post("/staff", auth, staffController.createStaff);
router.put("/staff/:id", auth, staffController.updateStaff);
router.delete("/staff/:id", staffController.deleteStaff);

// ✅ Generic :id route LAST
router.get("/staff/:id", auth, staffController.getStaffById);

// ---------------- SUBSCRIPTION PLAN ----------------
router.post('/subscriptionplans', subscriptionplanController.createSubscriptionPlan);
router.get('/subscriptionplans/:id', subscriptionplanController.findSubscriptionPlan);
router.put('/subscriptionplans/:id', subscriptionplanController.updateSubscriptionPlan);
router.delete('/subscriptionplans/:id', subscriptionplanController.deleteSubscriptionPlan);

// ---------------- SERVICE ----------------
router.post('/services', auth, serviceController.createService);
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
router.post('/appointments', auth, appoimentsController.createAppointment);
router.get('/appointments',auth,appoimentsController.tabappointments);
router.put('/appointments/:id', appoimentsController.updateAppointment);
router.delete('/appointments/:id', appoimentsController.deleteAppointment);

export default router;