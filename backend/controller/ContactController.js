import Contact from "../model/Contact.js";


export const addContact = async (req, res) => {
    try {
      
      const data = req.body;
      const product = new Contact(data);
      await product.save();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({ error: error });
    }
  }
  
  export const getContacts = async(req,res)=>{
      try{
          const data = await Contact.find()
          res.status(200).send(data)
      }catch(error){
          res.status(500).send({error:error})
      }
  }
  
  
  export const getContactById = async(req,res)=>{
      try{
          const id = req.params.id;
          const data = await Contact.findById(id)
          res.status(200).send(data)
      }catch(error){
          res.status(200).send({error:error})
      }
  }
  
  
  export const updateContact = async(req,res)=>{
      try{
          const id = req.params.id;
          const data = await Contact.findByIdAndUpdate(id,req.body,{new : true})
          res.status(200).send(data)
      }catch(error){        
          res.status(500).send({error:error})
      }
  }
  
  export const deleteContact =async(req,res)=>{
      try{
      const id= req.params.id;
      const data = await Contact.findByIdAndDelete(id)
      res.status(200).send({msg:"Deleted success"})
      }catch(error){
          res.status(500).send({error:error})
      }
  }