const express = require('express');
const router = express.Router();
const request = require('request');

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const bcrypt = require('bcrypt');
const { Client } = require('pg');
const { text } = require('express');
const { disabled } = require('express/lib/application');

const client = new Client({
  host: 'localhost',
  port:5432,
  user: 'postgres',
  password: 'azerty',
  database: 'RecipEasy'
});

client.connect();

router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
   });

router.post('/signup', async (req,res) => {
  Username = req.body.username;
  Email = req.body.email;
  Mdp = req.body.password;
  Mdp_conf = req.body.confirm_password;

  if(Username == "" || Email== "" || Mdp== "" || Mdp_conf== ""){
    res.json("Bad request - please enter your information");
    console.log("Bad request - please enter your information");
  }

  let alreadyexists = false;
  const op = await client.query({
    text : "SELECT * FROM users"
  })

  let i = 0;
  while(i<op.rows.length && alreadyexists!=true){
    if(op.rows[i].email == Email){
      alreadyexists = true;
    }
    i++;
  }

  if(alreadyexists == false) {
    const op2 = await client.query({
      text : 'INSERT INTO users(username, email ,password, confirm_password) VALUES ($1,$2,$3,$4)',
      values : [Username, Email, Mdp, Mdp_conf]
    })
    res.json("Success");
  }
  else{
    res.json("This email adress already exists");
  }
})

router.post('/login', async (req,res) => {
  const Email = req.body.email;
  const Mdp = req.body.password;

  console.log(Email);
  console.log(Mdp);

  const op = await client.query({
    text : "SELECT * FROM users where email=$1",
    values : [Email]
  })

  console.log(op);

  if(op.rows[0].email == Email && op.rows[0].password == Mdp){
      res.json("Connected");
    } else {
      return(res.status(401).json({message: 'Mdp ou Email incorrect'}))   
    }
})

router.post('/lessonsregister', async (req,res) => {
  const Name = req.body.name;
  const Firstname = req.body.firstname;
  const Email = req.body.email;
  const Chef = req.body.chef;
  const Date = req.body.date;
  const Hour = req.body.hour;
  const Level = req.body.level;

  console.log(Name);
  console.log(Firstname);
  console.log(Email);
  console.log(Chef);
  console.log(Date);
  console.log(Hour);
  console.log(Level);

  if(Name== "" || Firstname== "" || Email== "" || Chef== "" || Date== "" || Hour== "" || Level== ""){
    res.json("Bad request - please enter your information");
    console.log("Bad request - please enter your information");
  }

  const op = await client.query({
    text : "SELECT * FROM lesson_register"
  })

  const op2 = await client.query({
      text : 'INSERT INTO lesson_register(name, firstname ,email, chef, date, hour, level) VALUES ($1,$2,$3,$4,$5,$6,$7)',
      values : [Name, Firstname, Email, Chef, Date, Hour, Level]
    })

})



module.exports = router
