const express = require('express')
const app = express()
var cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/login/:name', (req, res)=>{
  res.cookie("name",req.params.name);
  res.send()
})

app.get('/hello',(req,res)=>{
	res.send(`Welcome ${req.cookies.name}!`);
})

app.listen(8000,()=>{console.log("Started server!")})