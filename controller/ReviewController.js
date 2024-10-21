import Review from "../model/Review.js";

export const addReview = async (req, res) => {
    try {
      
      const data = req.body;
      const product = new Review(data);
      await product.save();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({ error: error });
    }
  }
  
  export const getReviews = async(req,res)=>{
      try{
          const data = await Review.find()
          res.status(200).send(data)
      }catch(error){
          res.status(500).send({error:error})
      }
  }
  
  
  export const getReviewById = async(req,res)=>{
      try{
          const id = req.params.id;
          const data = await Review.findById(id)
          res.status(200).send(data)
      }catch(error){
          res.status(200).send({error:error})
      }
  }
  
  
  export const updateReview = async(req,res)=>{
      try{
          const id = req.params.id;
          const data = await Review.findByIdAndUpdate(id,req.body,{new : true})
          res.status(200).send(data)
      }catch(error){        
          res.status(500).send({error:error})
      }
  }
  
  export const deleteReview =async(req,res)=>{
      try{
      const id= req.params.id;
      const data = await Review.findByIdAndDelete(id)
      res.status(200).send({msg:"Deleted success"})
      }catch(error){
          res.status(500).send({error:error})
      }
  }
