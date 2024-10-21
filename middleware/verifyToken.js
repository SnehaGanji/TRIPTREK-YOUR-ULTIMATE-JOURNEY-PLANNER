import jwt from 'jsonwebtoken'

const verifyToken = async(req, res, next) =>{
    if(!req.headers.authorization) return res.status(403).json({msg: "Not Authorized. No Token"})

    if(req.headers.authorization.startsWith("Bearer")){
        const token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, "secret", (err, data)=>{
            if(err){
                return res.status(403).send({msg:"Wrong Or Expired Password"})
            }
            else{
                req.user = data
                next()
            }
        })
    }
}

module.exports = {
    verifyToken
}