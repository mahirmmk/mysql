const {Sequelize}=require("sequelize")
let database= process.env.database
let databaseUser= process.env.user
let password= process.env.password

const sequelize= new Sequelize(database, databaseUser, password, {
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(()=>{
    console.log(`connected to database`)
}).catch((err)=>console.log(err))




module.exports=sequelize