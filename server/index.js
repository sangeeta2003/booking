const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);

const jwtSecret = 'sangeetamishra';
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email });
    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        jwt.sign(
          { email: userDoc.email, id: userDoc._id },
          jwtSecret,
          {},
          (err, token) => {
            if (err) {
              return res.status(500).json('Error signing token');
            }
            res.cookie('token', token).json(userDoc);
          }
        );
      } else {
        res.status(401).json('Invalid password');
      }
    } else {
      res.status(404).json('User not found');
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

app.get('/profile',async(req,res)=>{
  const {token} = req.cookies;
re.json('userinfo')
})

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
