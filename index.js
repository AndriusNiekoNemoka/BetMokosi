const express = require('express');
const bodyParser = require('body-parser');
const app = express();  
app.use(bodyParser.urlencoded({extended: true}));            
const port = 5001;      
const db = require('./database');
app.set("view engine", "ejs")


app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});     
});
   

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});


