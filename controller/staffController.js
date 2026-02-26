import Staff from "../model/staff.js";

/* ==============================
   CREATE STAFF
============================== */
export const createStaff = async (req, res) => {
  try {
    console.log("📝 Creating staff with data:", req.body);
    const staff = await Staff.create(req.body);
    console.log("✅ Staff created successfully");
    res.status(201).json(staff);
  } catch (error) {
    console.error("❌ Error creating staff:", error);
    res.status(400).json({
      message: "Failed to create staff",
      error: error.message,
    });
  }
};

/* ==============================
   🔥 GET ALL STAFF (by userid)
============================== */
export const getAllStaff = async (req, res) => {
  try {
    const { userid } = req.params;
    console.log("=" .repeat(50));
    console.log("📋 GET ALL STAFF - Route Hit!");
    console.log("👤 UserID from params:", userid);
    console.log("=" .repeat(50));

    // Get ALL staff (not filtered by userid)
    // If you want to filter by userid, add { userId: userid } to find()
    const staff = await Staff.find().sort({ createdAt: -1 });
    
    console.log("✅ Found staff count:", staff.length);
    console.log("📋 Staff list:", staff.map(s => ({ name: s.fullName, id: s._id })));
    
    res.status(200).json(staff);
  } catch (error) {
    console.error("❌ Error fetching all staff:", error);
    res.status(500).json({
      message: "Failed to fetch staff",
      error: error.message,
    });
  }
};

/* ==============================
   GET STAFF BY ID
============================== */
export const getStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🔍 Fetching staff by ID:", id);

    const staff = await Staff.findById(id);

    if (!staff) {
      console.log("❌ Staff not found");
      return res.status(404).json({ message: "Staff not found" });
    }

    console.log("✅ Staff found:", staff.fullName);
    res.status(200).json(staff);
  } catch (error) {
    console.error("❌ Error fetching staff by ID:", error);
    res.status(500).json({
      message: "Error fetching staff",
      error: error.message,
    });
  }
};

/* ==============================
   UPDATE STAFF
============================== */
export const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("📝 Updating staff ID:", id);

    const staff = await Staff.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!staff) {
      console.log("❌ Staff not found");
      return res.status(404).json({ message: "Staff not found" });
    }

    console.log("✅ Staff updated successfully");
    res.status(200).json(staff);
  } catch (error) {
    console.error("❌ Error updating staff:", error);
    res.status(400).json({
      message: "Failed to update staff",
      error: error.message,
    });
  }
};

/* ==============================
   DELETE STAFF
============================== */
export const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🗑️ Deleting staff ID:", id);

    const staff = await Staff.findByIdAndDelete(id);

    if (!staff) {
      console.log("❌ Staff not found");
      return res.status(404).json({ message: "Staff not found" });
    }

    console.log("✅ Staff deleted successfully");
    res.status(200).json({ message: "Staff deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting staff:", error);
    res.status(500).json({
      message: "Failed to delete staff",
      error: error.message,
    });
  }
};

/* ==============================
   🔥 GET STAFF BY SERVICE (FILTER)
   PUBLIC ROUTE - No auth needed
============================== */
export const getbyservice = async (req, res) => {
  try {
    const { service } = req.query;
    if (!service) {
      console.log("❌ No service provided in query");
      return res.status(400).json({ message: "Service is required" });
    }

    // Case-insensitive match
    const staff = await Staff.find({
      services: { $regex: new RegExp(`^${service}$`, "i") },
    });

    console.log("✅ Found staff count:", staff.length);
    if (staff.length > 0) {
      console.log("📋 Staff names:", staff.map(s => s.fullName).join(", "));
    } else {
      console.log("⚠️ No staff found for this service");
      console.log("💡 TIP: Make sure service name matches exactly with what's in database");
    }
    res.status(200).json(staff);
  } catch (error) {
    console.error("❌ ERROR in getbyservice:", error);
    res.status(500).json({
      message: "Failed to filter staff by service",
      error: error.message,
    });
  }
};
export const getStaffWorkingHours = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findById(id);

    if (!staff) {
      console.log("❌ Staff not found");
      return res.status(404).json({ message: "Staff not found" });
    }    
    res.status(200).json(staff.workingHours || []);
  } catch (error) {
    console.error("❌ ERROR in getStaffWorkingHours:", error);
    res.status(500).json({
      message: "Failed to fetch working hours",
      error: error.message,
    });
  }
};