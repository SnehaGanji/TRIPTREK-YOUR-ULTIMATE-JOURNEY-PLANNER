import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    address: {
        type: String,
        required: true,
    },
    message:String
})

export const Contact = mongoose.model("Contact",contactSchema)
export default Contact;