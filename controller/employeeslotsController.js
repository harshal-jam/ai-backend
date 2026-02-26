import EmployeeSlot from '../model/employeeSlots.js';

// Create a new employee slot
export const createEmployeeSlot = async (req, res) => {
  try {
    const slot = await EmployeeSlot.create(req.body);
    res.status(201).json({ success: true, data: slot });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single employee slot by ID
export const findEmployeeSlot = async (req, res) => {
  try {
    const slot = await EmployeeSlot.findById(req.params.id);
    if (!slot) {
      return res
        .status(404)
        .json({ success: false, message: 'Employee slot not found' });
    }
    res.status(200).json({ success: true, data: slot });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an employee slot by ID
export const updateEmployeeSlot = async (req, res) => {
  try {
    const slot = await EmployeeSlot.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!slot) {
      return res
        .status(404)
        .json({ success: false, message: 'Employee slot not found' });
    }
    res.status(200).json({ success: true, data: slot });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an employee slot by ID
export const deleteEmployeeSlot = async (req, res) => {
  try {
    const slot = await EmployeeSlot.findByIdAndDelete(req.params.id);
    if (!slot) {
      return res
        .status(404)
        .json({ success: false, message: 'Employee slot not found' });
    }
    res
      .status(200)
      .json({ success: true, message: 'Employee slot deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};