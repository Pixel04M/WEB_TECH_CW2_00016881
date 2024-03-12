const express = require('express');
const path = require('path');
const app = express();

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up view engine and views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Define routes
const indexRouter = require('./routes/index');
const farmersRouter = require('./routes/farmers');
const productsRouter = require('./routes/products');

app.use('/', indexRouter);
app.use('/farmers', farmersRouter);
app.use('/products', productsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
