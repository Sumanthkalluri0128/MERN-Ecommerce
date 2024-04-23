const express=require('express')

const app=express()

const PORT=3000
const apiRoutes=require('./routes/apiRoutes')

app.use("/api",apiRoutes)
app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(PORT, ()=>{
    console.log(`listing on port ${PORT}`)
})