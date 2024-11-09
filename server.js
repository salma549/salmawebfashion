// // server.js
// const express = require('express');
// const connectDB = require('./config/db');
// const productRoutes = require('./routes/productRoutes');
// const cartRoutes = require('./routes/cartRoute');
// const { errorHandler, requestLogger } = require('./middleware/errorMiddleware');

// const app = express();
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(requestLogger); // Log requests

// // Routes
// app.use('/api/products', productRoutes);
// app.use('/api/cart', cartRoutes);

// // Error handling middleware
// app.use(errorHandler); // Handle errors

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// server.js
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoute');
const { errorHandler, requestLogger } = require('./middleware/errorMiddleware');
const cors = require('cors'); // Import cors

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(requestLogger); // Log requests

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Error handling middleware
app.use(errorHandler); // Handle errors

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

