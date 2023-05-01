const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
const postRouter = require('./routes/postRoute');
const db = require('./dbConnection/db');
const getRouter = require('./routes/getRoute'); 

// middleware
app.use(cors());
app.use(express.json()); 

// db connection
db(); 

// routes
app.use('/post/route', postRouter);
app.use('/get/route', getRouter);

// server listening
app.listen(port, (req, res) => {
    console.log(`server working on:${port}`); 
});

