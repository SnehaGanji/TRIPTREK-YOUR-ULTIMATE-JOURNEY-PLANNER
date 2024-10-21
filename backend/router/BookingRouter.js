import express from 'express'
import * as BookingController from '../controller/BookingController.js'

const bookingRouter= express.Router();
bookingRouter.post("/",BookingController.addBooking)
bookingRouter.get("/",BookingController.getBookings)
bookingRouter.get("/:id",BookingController.getBookingById)
bookingRouter.patch("/:id",BookingController.updateBooking)
bookingRouter.delete("/:id",BookingController.deleteBooking)

export default bookingRouter;