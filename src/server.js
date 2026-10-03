const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON
app.use(express.json());

// Root Endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'DevPilot Test App is running!',
    version: '1.0.0'
  });
});

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    service: 'DevPilot Test App'
  });
});

// Application Info Endpoint
app.get('/api/info', (req, res) => {
  res.status(200).json({
    name: 'DevPilot Test App',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// 404 Handler for Unknown Routes
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found'
  });
});

// Start the Express Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
