const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes
app.use('/api/items', itemRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
