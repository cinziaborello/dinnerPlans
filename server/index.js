const express = require('express');
const axios = require('axios');

const db = require('../database/');
const controller = require('../database/controllers/day.js')

const app = express();
const PORT = 4000;

app.use(express.static('public'));
app.use(express.json());

app.post('/dinnerplans', controller.createMeal);
app.get('/dinnerplans/:weekday', controller.retrieveMeal);
app.delete('/dinnerplans/:weekday', controller.deleteMeal);
app.put('/dinnerplans', controller.editMeal);

app.get('/recipes/:keyword', (req, res) => {
  const query = req.params.keyword;
  axios.get(`http://www.recipepuppy.com/api/?q=${query}`)
  .then((response) => {
    res.status(200).send(response.data.results);
  })
  .catch((err) => {
    res.status(500).send('Error in retrieving a recipe');
  });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});