import express from "express";
import * as TourController from "../controller/TourController.js";
import multer from "multer";
const STORAGE = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/tourimages");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname + "-" + Date.now() + "." + file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: STORAGE });
const tourRouter = express.Router();
tourRouter.post("/", upload.single("photo"), TourController.addTour);
tourRouter.get("/", TourController.getTours);
tourRouter.get("/:id", TourController.getTourById);
tourRouter.patch("/:id", upload.single("photo"),TourController.updateTour);
tourRouter.delete("/:id", TourController.deleteTour);

export default tourRouter;
