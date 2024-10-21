import express from 'express';

import * as ContactController from '../controller/ContactController.js'
const conatctRouter=express.Router();
conatctRouter.post("/",ContactController.addContact)
conatctRouter.get("/",ContactController.getContacts)
conatctRouter.get("/:id",ContactController.getContactById)
conatctRouter.patch("/:id",ContactController.updateContact)
conatctRouter.delete("/:id",ContactController.deleteContact)

export default conatctRouter;