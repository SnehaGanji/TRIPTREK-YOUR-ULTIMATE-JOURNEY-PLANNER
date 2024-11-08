import config from "./config.js";

// Get all Bookings
export function getBookings() {
  return config.get("/booking");
}

// Get Booking by id
export function getBookingById(id) {
  return config.get(`/booking/${id}`);
}

// Add new Booking
export function addBooking(data) {
  return config.post("/booking", data);
}

// Update Booking
export function updateBooking(data) {
  return config.patch(`/booking/${data.id}`, data);
}

// Delete Booking
export function deleteBooking(id) {
  return config.delete(`/booking/${id}`);
}
