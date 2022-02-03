// 1- require /import express
const express = require('express');
const res = require('express/lib/response');
//2- init the application
const app = express();
// 3- create a port 
const port = 6900
//4- run the application
app.listen(port,(err) =>
err?console.log(err) : console.log(`the application is listen to the port${port}`)
) 
// 5- routing 
app.get('/', (req, res) =>{
    res.send ("<h1>hello world</h1>")
    console.log (req.method)
})
app.get('/wee', (req, res) =>{
    res.send ("<h1>cv lold</h1>")
    console.log(req.method)
})
//-6 middlewere
function frist (req,res,next) {console.log("HELLO ena lowl")
next();
}
app.use (frist)
app.get ("/*",(req,res )=>{
    res.send ("<h1>404</h1>")
})