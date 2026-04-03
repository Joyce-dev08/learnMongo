const express = require('express');
const app = express()
app.use(express.json());
const cors = require('cors');
app.use(cors({
   origin: "http://localhost:5173"
}));

const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./db.js');


 connectDB();


 //routes
 app.use('/api/users', require('./routes/users.js'));
 app.use('/api/posts', require('./routes/posts.js'));
 app.use('/api/comments', require('./routes/comments.js'));
 app.use('/api/auth', require('./routes/auth.js'));


 app.listen(3000, () => {
    console.log('server connect to port 3000')
 })