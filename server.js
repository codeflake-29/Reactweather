const express=require('express')
const app=express()
app.use(express.static('public'))
app.listen(3002,()=>{
    console.log('express server is on port 3002')
})