const sequelize= require("../utils/databaseConfig")
const {DataTypes} =require("sequelize")
const User= require("../models/userModel")

const Product= sequelize.define("Product", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{type:DataTypes.STRING, allowNull:false},
    price:{type:DataTypes.FLOAT, allowNull:false},
    category:{type:DataTypes.STRING},
    
}, )


Product.belongsTo(User)

module.exports=Product