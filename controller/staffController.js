const Staff = require("../model/staff");
exports.createStaff = async (req, res) => {
  try {
    const staff = await Staff.create(req.body);
    console.log(req.body)
    res.status(201).json(staff);
  } catch (error) {
    console.log(error);
    
    res.status(400).json(error);
  }
};

exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find({});
    res.status(200).json(staff);
  } catch (error) {
    console.log(error);
    
    res.status(500).json(error);
  }
};

exports.updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true}
    );
    res.status(200).json(staff);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    res.status(200).json(staff);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
