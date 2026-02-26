import CompanySubscription from '../model/companySubscription.js';

// Create a new company subscription
export const createCompanySubscription = async (req, res) => {
  try {
    const subscription = await CompanySubscription.create(req.body);
    res.status(201).json({ success: true, data: subscription });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single company subscription by ID
export const findCompanySubscription = async (req, res) => {
  try {
    const subscription = await CompanySubscription.findById(req.params.id);
    if (!subscription) {
      return res
        .status(404)
        .json({ success: false, message: 'Company subscription not found' });
    }
    res.status(200).json({ success: true, data: subscription });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a company subscription by ID
export const updateCompanySubscription = async (req, res) => {
  try {
    const subscription = await CompanySubscription.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!subscription) {
      return res
        .status(404)
        .json({ success: false, message: 'Company subscription not found' });
    }
    res.status(200).json({ success: true, data: subscription });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a company subscription by ID
export const deleteCompanySubscription = async (req, res) => {
  try {
    const subscription = await CompanySubscription.findByIdAndDelete(
      req.params.id
    );
    if (!subscription) {
      return res
        .status(404)
        .json({ success: false, message: 'Company subscription not found' });
    }
    res
      .status(200)
      .json({
        success: true,
        message: 'Company subscription deleted successfully',
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};