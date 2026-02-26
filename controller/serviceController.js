import Service from '../model/service.js';

// Create a new service
export const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single service by user ID
export const findService = async (req, res) => {
  try {
    const userid = req.params.id;
    const service = await Service.find({ user: userid });
    if (!service || service.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: 'Service not found' });
    }
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a service by ID
export const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!service) {
      return res
        .status(404)
        .json({ success: false, message: 'Service not found' });
    }
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a service by ID
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res
        .status(404)
        .json({ success: false, message: 'Service not found' });
    }
    res
      .status(200)
      .json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};