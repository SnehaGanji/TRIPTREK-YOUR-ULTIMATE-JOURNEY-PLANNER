import express from "express";
import * as UserController from "../controller/UserController.js";
import multer from "multer";
const STORAGE = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/userimages");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname + "-" + Date.now() + "." + file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: STORAGE });
const userRouter = express.Router();
userRouter.post("/register", upload.single("photo"), UserController.register);
userRouter.post("/login", UserController.login);
userRouter.get("/", UserController.getUsers);
userRouter.get("/:id", UserController.getUserById);
userRouter.get("/:email", UserController.getUserByEmail);
userRouter.patch("/:id", upload.single("photo"), UserController.updateUser);
userRouter.delete("/:id", UserController.deleteUser);
userRouter.post("/change", UserController.changePassword);

export default userRouter;
