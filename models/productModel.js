const sequelize= require("../utils/databaseConfig")
const {DataTypes} =require("sequelize")

const User= sequelize.define("user", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{type:DataTypes.STRING, allowNull:false},
    price:{type:DataTypes.FLOAT, allowNull:false},
    category:{type:DataTypes.STRING}
})

module.exports=User