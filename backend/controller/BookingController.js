import Booking from "../model/Booking.js";

export const addBooking = async (req, res) => {
    try {
      
      const data = req.body;
      const product = new Booking(data);
      await product.save();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({ error: error });
    }
  }
  
  export const getBookings = async(req,res)=>{
      try{
          const data = await Booking.find()
          res.status(200).send(data)
      }catch(error){
          res.status(500).send({error:error})
      }
  }
  
  
  export const getBookingById = async(req,res)=>{
      try{
          const id = req.params.id;
          const data = await Booking.findById(id)
          res.status(200).send(data)
      }catch(error){
          res.status(200).send({error:error})
      }
  }
  
  
  export const updateBooking = async(req,res)=>{
      try{
          const id = req.params.id;
          const data = await Booking.findByIdAndUpdate(id,req.body,{new : true})
          res.status(200).send(data)
      }catch(error){        
          res.status(500).send({error:error})
      }
  }
  
  export const deleteBooking =async(req,res)=>{
      try{
      const id= req.params.id;
      const data = await Booking.findByIdAndDelete(id)
      res.status(200).send({msg:"Deleted success"})
      }catch(error){
          res.status(500).send({error:error})
      }
  }
