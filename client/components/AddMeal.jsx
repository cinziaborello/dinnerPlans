import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Button } from './styled/Button.jsx';
import { Form, Label, TextArea } from './styled/TextArea.jsx';

const AddMeal = ({weekday, fetchData}) => {
  const [dinner, setDinner] = useState('');

  const handleChange = (event) => {
    setDinner(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    axios.post('/dinnerplans', {
      dinner: dinner,
      weekday: weekday
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      fetchData();
    });
  };

  return (
    <Form onSubmit={handleSave}>
        <Label>
          Add a meal:
        </Label>
          <TextArea value={dinner} onChange={handleChange} />
        <Button type="submit">Save</Button>
    </Form>
  );
};

export default AddMeal;