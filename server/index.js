const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const User =require('./models/user')
const bcrypt = require('bcryptjs')
const app =  express();
const bcryptSalt = bcrypt.genSaltSync(10);
app.use(express.json());
app.use(cors({
    credentials:true,
origin:'http://localhost:5173',
}));
 mongoose.connect(process.env.MONGO_URL)
app.get('/test',(req,res)=>{
    res.json('test ok')
});
app.post('/register',async(req,res)=>{
    const{name,email,password} = req.body;
  const userdoc =  await User.create({
        name,
        email,
        password:bcrypt.hashSync(password,bcryptSalt)
    })
    res.json(userdoc)
})

app.listen(4000);