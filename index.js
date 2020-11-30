const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const fruits = require('./fruitdata');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 4444;

const app = express();

app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(`This is a sample app. Please go to /fruits`);
});

app.get('/fruits', (req, res) => {
  res.json(fruits);
});

app.get('/fruits/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json(fruits.find((fruit) => fruit.id == id));
});

app.listen(PORT, () => {
  console.log(`Sample app running on port ${PORT}`);
});
