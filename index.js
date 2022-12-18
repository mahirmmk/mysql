const express=require("express")
const app=express()
app.use(express.json())
require("dotenv").config()
const port = process.env.port
const sequelize=require("./utils/databaseConfig")
const productRouter= require("./routes/productRoutes")

sequelize.sync().then(()=>{
    console.log("database synced")
}).catch((err)=>console.log(err))

app.use("/product",productRouter)

app.listen(port, ()=> console.log(`the server is listening at http://localhost:${port}`))