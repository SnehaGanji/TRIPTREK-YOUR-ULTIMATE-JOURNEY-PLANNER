import config from "./config.js";

// Get all Tours
export function getTours() {
  return config.get("/tour");
}

// Get Tour by id
export function getTourById(id) {
  return config.get(`/tour/${id}`);
}

// Add new Tour
export function addTour(data) {
  return config.post("/tour", data);
}

// Update Tour
export function updateTour(id,data) {
  return config.patch(`/tour/${id}`, data);
}

// Delete Tour
export function deleteTour(id) {
  return config.delete(`/tour/${id}`);
}
