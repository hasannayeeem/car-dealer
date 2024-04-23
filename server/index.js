const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;
const Connection = require('./db/connectDB');
const router = require('./routes/route');


// middleware
app.use(cors())
app.use(express.json())




// env variables
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// database connection 
Connection(USERNAME, PASSWORD);

app.use('/api/v1', router)

app.get('/', (req, res) => {
	res.send('Welcome to Autostars Serverzzz')
})

app.listen(process.env.PORT || 8000, () => {
	console.log(`Server is running on port ${PORT}`)
})