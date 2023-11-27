const express = require('express');
const app = express();
const mysql2 = require('mysql2');
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
    user:"root",
    host:"localhost",
    password:"sirisan123",
    database:"customer"
})

app.get('/customer', (req,res) => {
    db.query("SELECT * FROM customer" , (err,result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    });
});

app.listen('3001', () =>{
    console.log('Server is running on port 3001');
});