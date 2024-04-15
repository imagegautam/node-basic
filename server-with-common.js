const express = require('express')
const app = express();
const path = require('path');
console.log(path);

console.log(__dirname);
app.use(express.urlencoded());

app.post("/register", (req, res) =>{
    console.log(req.body);
    res.send("data received")
})
app.get("/" , (req, res)=>{

    console.log(req.query);
   
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/register", (req, res) =>{

    res.sendFile(__dirname + "/public/register.html");
});

app.listen(8000, (error) => {
    error ?
    console.log(error)
    :
    console.log('your server is running at http://localhost:8000')
});

