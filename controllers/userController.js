
const User=require("../models/userModel")

const createUser= (req, res)=>{
    User.create(req.body).then((success)=>{
        res.json(success)
    }).catch((err)=>{
        res.json(err)
    })
} 

const getAllUsers=(req, res)=>{
    User.findAll().then((data)=>{
        res.json({
            success:true,
            data:data
        })
    }).catch((err)=>console.log(err))
}

const getUserById=(req, res,)=>{
    id=req.params.id
    User.findByPk(id).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err)
    })
}


module.exports={createUser, getAllUsers, getUserById}