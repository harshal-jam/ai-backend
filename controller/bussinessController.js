import Business from '../model/bussiness.js';

export const createBusiness = async (req, res) => {
  try {
    const userid = req.user.id;
    const business = await Business.create(req.body);
    res.status(201).json({ success: true, data: business });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findBusiness = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res
        .status(404)
        .json({ success: false, message: 'Business not found' });
    }
    res.status(200).json({ success: true, data: business });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBusiness = async (req, res) => {
  try {
    const business = await Business.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!business) {
      return res
        .status(404)
        .json({ success: false, message: 'Business not found' });
    }
    res.status(200).json({ success: true, data: business });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBusiness = async (req, res) => {
  try {
    const business = await Business.findByIdAndDelete(req.params.id);
    if (!business) {
      return res
        .status(404)
        .json({ success: false, message: 'Business not found' });
    }
    res
      .status(200)
      .json({ success: true, message: 'Business deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};