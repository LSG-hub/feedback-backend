// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Middleware to parse JSON bodies and enable CORS
app.use(express.json());
app.use(cors());

// Connect to MongoDB (Replace <USERNAME> and <PASSWORD> with your actual MondoDB Atlas Credentials)
mongoose.connect('mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.kkgt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Define a Mongoose schema for feedback
const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

// Create a model from the schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

// POST /feedback: Endpoint to receive and store feedback
app.post('/feedback', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation: Ensure all fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please provide name, email, and feedback message" });
  }

  try {
    // Create a new feedback entry
    const newFeedback = new Feedback({ name, email, message });
    // Save it to the database
    await newFeedback.save();
    // Respond with success and the saved feedback
    res.status(201).json({ message: "Feedback submitted successfully", feedback: newFeedback });
  } catch (error) {
    res.status(500).json({ error: "Error saving feedback" });
  }
});

// GET /feedback: Endpoint to retrieve all submitted feedback
app.get('/feedback', async (req, res) => {
  try {
    // Retrieve feedback entries from the database, sorted by most recent
    const feedbackList = await Feedback.find().sort({ timestamp: -1 });
    res.status(200).json(feedbackList);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving feedback" });
  }
});

// Start the server on a designated port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
