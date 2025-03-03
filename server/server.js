// Import Express module and cors
const express = require('express');
const cors = require('cors')

// Create an Express application
const app = express();

// Define a port to run the server on
const PORT = process.env.PORT || 3000;

// Middleware (optional, but useful for handling JSON)
app.use(express.json());


// app.get('/', (req, res) => {
//   res.send('Hello');
// });

app.use(cors({
  origin: 'http://localhost:3001', // Your React app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Example API route
app.get('/', (req, res) => {
  console.log('route hit')
  res.json({ username: "Greg", password: "pword"})
  // res.json({ message: 'This is some data' });
});

// Example POST route
app.post('/', (req, res) => {
  const newData = req.body;
  console.log(newData)
  // res.status(201).json({ message: 'Data received', data: newData });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
