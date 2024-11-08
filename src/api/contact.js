import config from "./config.js";

// Get all Contacts
export function getContacts() {
  return config.get("/contact");
}

// Get Contact by id
export function getContactById(id) {
  return config.get(`/contact/${id}`);
}

// Add new Contact
export function addContact(data) {
  return config.post("/contact", data);
}

// Update Contact
export function updateContact(data) {
  return config.patch(`/contact/${data.id}`, data);
}

// Delete Contact
export function deleteContact(id) {
  return config.delete(`/contact/${id}`);
}
