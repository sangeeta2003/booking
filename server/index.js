const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken')
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
    try{
        const userdoc =  await User.create({
            name,
            email,
            password:bcrypt.hashSync(password,bcryptSalt)
        })
        res.json(userdoc)
    }catch(e){
        res.status(500).json(e)
    }
  
})

app.post('/login',async(req,res)=>{
    const{email,password} = req.body;
    try{
const userdoc = await User.findOne({email})
if(userdoc){
    const passOk = bcrypt.compareSync(password,userdoc.password)
    if(passOk){
        res.cookie('token','').json('pass ok');
        res.json('pass ok');
    }
    else{
        res.json('pass not ok');
    }
    res.json('found')
}else{
    res.json('not found')
}
    }catch(e){
        re.status(500).json(e);
    }
})

app.listen(4000);