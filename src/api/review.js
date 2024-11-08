import config from "./config.js";

// Get all Reviews
export function getReviews() {
  return config.get("/review");
}

// Get Review by id
export function getReviewById(id) {
  return config.get(`/review/${id}`);
}

// Add new Review
export function addReview(data) {
  return config.post("/review", data);
}

// Update Review
export function updateReview(data) {
  return config.patch(`/review/${data.id}`, data);
}

// Delete Review
export function deleteReview(id) {
  return config.delete(`/review/${id}`);
}
