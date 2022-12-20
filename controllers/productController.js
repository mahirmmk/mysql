const Product= require("../models/productModel")
const User = require("../models/userModel")


const getAllProducts=(req, res)=>{
    Product.findAll({include:[{model:User}]}).then((data)=>{
        res.json({
            message:"fetched all Product",
            data:data
        })
    })
}

const getProduct=(req, res)=>{
    const id =req.params.id
    Product.findByPk(id).then((data)=>{
        res.json(data)
    })
} 



const createProduct= (req, res)=>{
    let product={
        title:req.body.title,
        price:req.body.price,
        category:req.body.category,
        userId:req.body.userId
    }
    Product.create(product).then((success)=>{
        res.json({
            message:"product created successfully",
            data:success
        })
    }).catch((err)=>{
        res.json({
            message:"failed to create product",
            data:err
        })
    })
} 

const updateProduct =(req, res)=>{
    let title=req.body.title
    let price=req.body.price
    let category=req.body.category
    let id=req.params.id
    Product.findByPk(id)
        .then((product)=>{
            product.title=title
            product.price=price
            product.category=category
            product.save()
                .then((success)=>{
                    res.json({
                        message:"product updated successfully",
                        data:success
                    })
                })
        }).catch((err)=>{
            res.json(err)
        })
}

const deleteProduct=(req, res)=>{
    const id=req.params.id
    Product.findByPk(id).then(product=>{
        return product.destroy()
    }).then(success=>{
        res.json({
            message:"product destroyed successfully",
            data:success
        })
    })
        .catch(err=>console.log(err))
} 

module.exports={getAllProducts , createProduct, getProduct, updateProduct, deleteProduct}