import Appointment from '../model/appointment.js';

// Create a new appointment
export const createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single appointment by ID
export const findAppointment = async (req, res) => {
  try {
    const appointments = await Appointment.find();

    console.log(appointments);

    res.status(200).json({
      success: true,
      data: appointments
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const tabappointments = async (req, res) => {
  try {
    const { status, search, date } = req.query;
    let filter = {};
    // status filter (case insensitive)
    if (status && status !== "ALL") {
      filter.status = { $regex: `^${status}$`, $options: "i" };
    }
    // search filter
    if (search && search.trim() !== "") {
      filter.$or = [
        { customer_name: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
      ];
    }
    // date filter (STRING MATCH)
   if (date) {
  filter.date = { $regex: date };
}

    console.log("Final filter:", filter);

    const appointments = await Appointment.find(filter);

    res.json({ data: appointments });
  } catch (error) {
    res.status(500).json(error);
  }
};
// Update an appointment by ID
export const updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!appointment) {
      return res
        .status(404)
        .json({ success: false, message: 'Appointment not found' });
    }
    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an appointment by ID
export const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res
        .status(404)
        .json({ success: false, message: 'Appointment not found' });
    }
    res
      .status(200)
      .json({ success: true, message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};