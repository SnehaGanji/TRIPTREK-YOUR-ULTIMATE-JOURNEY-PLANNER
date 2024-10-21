import Tour from "../model/Tour.js";

export const addTour = async (req, res) => {
  try {
    if (req.file) {
      req.body.photo = req.file.filename;
    }
    const { startLocation, endLocation } = req.body;
    if (startLocation && endLocation) {
      req.body.startLocation = {
        type: "Point",
        coordinates: [
          parseFloat(startLocation.longitude),
          parseFloat(startLocation.latitude),
        ],
        description: startLocation.description || "",
      };

      req.body.endLocation = {
        type: "Point",
        coordinates: [
          parseFloat(endLocation.longitude),
          parseFloat(endLocation.latitude),
        ],
        description: endLocation.description || "",
      };
    }
    const tour = await Tour.create({ ...req.body });
    await tour.save();

    return res.status(201).json(tour);
  } catch (error) {
    res.status(500).send({ error: error.message || "Internal server error" });
  }
};

export const getTours = async (req, res) => {
  try {
    const data = await Tour.find().sort({ createdAt: 1 });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

export const getTourById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Tour.findById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(200).send({ error: error });
  }
};

export const updateTour = async (req, res) => {
  try {
    const id = req.params.id;
    if (req.file) {
      req.body.photo = req.file.filename;
      const data = await Tour.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).send(data);
    } else {
      const data = await Tour.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).send(data);
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

export const deleteTour = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Tour.findByIdAndDelete(id);
    res.status(200).send({ msg: "Deleted success" });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
