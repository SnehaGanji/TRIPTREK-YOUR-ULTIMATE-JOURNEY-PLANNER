import config from "./config.js";

// Get all Users
export function getUsers() {
  return config.get("/user");
}

// Get User by id
export function getUserById(id) {
  return config.get(`/user/${id}`);
}

// Add new User
export function addUser(data) {
  return config.post("/user/register", data);
}

// Update User
export function updateUser(id, data) {
  return config.patch(`/user/${id}`, data);
}

// Delete User
export function deleteUser(id) {
  return config.delete(`/user/${id}`);
}

// Change Password User
export function ChangePassword(data) {
  return config.post(`/user/change`, data);
}
