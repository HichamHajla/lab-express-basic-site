const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

const port = 8000

app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views/home.html");
 })

 app.get('/About',(req,res)=>{
    res.sendFile(__dirname + "/views/about.html");
 })

 app.get('/Works',(req,res)=>{
    res.sendFile(__dirname + "/views/works.html");
 })

//  app.get('/pictures',(req,res)=>{
//     res.sendFile(__dirname + "/views/pictures.html");
//  })

app.listen(port, () => {
    console.log(`Server build on port ${port}`)
})