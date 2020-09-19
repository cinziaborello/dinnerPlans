const Day = require('../models/day.js');
const db = require('../index.js');

const createMeal = (req, res) => {
  Day.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send('Error in adding a meal');
    } else {
      res.status(200).send('Meal added correctly');
    }
  });
};

const retrieveMeal = (req, res) => {
  Day.find(req.params, (err, data) => {
    if (err) {
      res.status(500).send('Error in retrieving a meal');
    } else {
      res.status(200).send(data);
    }
  });
};

const deleteMeal = (req, res) => {
  Day.deleteOne({weekday: req.params.weekday}, (err, data) => {
    if (err) {
      res.status(500).send('Error in deleting a meal');
    } else {
      res.status(200).send('Meal deleted correctly');
    }
  });
};

const editMeal = (req, res) => {
  Day.update({weekday: req.body.weekday}, {dinner: req.body.dinner, weekday: req.body.weekday}, {overwrite: true}, (err, data) => {
    if (err) {
      res.status(500).send('Error in editing a meal');
    } else {
      res.status(200).send('Meal edited correctly');
    }
  });
};

module.exports = {
  createMeal,
  retrieveMeal,
  deleteMeal,
  editMeal
};
