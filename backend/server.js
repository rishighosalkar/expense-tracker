const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
//const uri = "mongodb://localhost:27017/users";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
    );

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/userRoute');
app.use('/user', usersRouter);

const expenseRouter = require('./routes/expenseRoute');
app.use('/expense', expenseRouter);
 
app.listen(port, () => 
    console.log('Server is running on port:', port)
);