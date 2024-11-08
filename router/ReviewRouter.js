import express from 'express'
import * as ReviewController from '../controller/ReviewController.js'

const reviewRouter= express.Router();
reviewRouter.post("/",ReviewController.addReview)
reviewRouter.get("/",ReviewController.getReviews)
reviewRouter.get("/:id",ReviewController.getReviewById)
reviewRouter.patch("/:id",ReviewController.updateReview)
reviewRouter.delete("/:id",ReviewController.deleteReview)

export default reviewRouter;