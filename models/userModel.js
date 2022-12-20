const {  DataTypes, Model} = require("sequelize")
const Product= require('./productModel')
const sequelize= require("../utils/databaseConfig")


const User=sequelize.define("user", {

    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    userName:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING}

})

// class User extends Model{
   
// }




// User.init({

    

//     id:{
//         type:DataTypes.INTEGER,
//         autoIncrement:true,
//         primaryKey:true
//     },
//     userName:{type:DataTypes.STRING},
//     email:{type:DataTypes.STRING},
//     password:{type:DataTypes.STRING}
// },{
//     sequelize
// })



module.exports=User