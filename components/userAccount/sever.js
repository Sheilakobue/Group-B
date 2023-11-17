const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Handle user sign-in
app.post('/api/auth/signin', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ email, password });

  if (user) {
    // Successful sign-in
    res.status(200).json({ message: 'Sign-in successful' });
  } else {
    // Sign-in failed
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
