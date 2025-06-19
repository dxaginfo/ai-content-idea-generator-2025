const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Routes (to be implemented)
const authRoutes = require('./routes/auth');
const ideaRoutes = require('./routes/ideas');
const calendarRoutes = require('./routes/calendar');

// Middleware
const authMiddleware = require('./middleware/auth');

// Placeholder for routes (to be implemented)
const authRoutes = express.Router();
const ideaRoutes = express.Router();
const calendarRoutes = express.Router();

// App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/ideas', ideaRoutes);
app.use('/api/calendar', calendarRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
}

module.exports = app;
