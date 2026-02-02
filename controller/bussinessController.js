const Business = require('../model/bussiness');

exports.createBusiness = async (req, res) => {
  try {
    const userid = req.user.id;
    const business = await Business.create(req.body);
    res.status(201).json({ success: true, data: business });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.findBusiness = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    res.status(200).json({ success: true, data: business });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBusiness = async (req, res) => {
  try {
    const business = await Business.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ success: true, data: business });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBusiness = async (req, res) => {
  try {
    const business = await Business.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: business });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};