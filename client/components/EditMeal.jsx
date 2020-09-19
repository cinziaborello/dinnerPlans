import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Button } from './styled/Button.jsx';
import { Form, Label, TextArea } from './styled/TextArea.jsx';

const EditMeal = ({ weekday, plan, fetchData }) => {
  const [dinner, setDinner] = useState(plan);
  const [form, setForm] = useState(true);

  const handleChange = (event) => {
    setDinner(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    axios.put('/dinnerplans', {
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
      setForm(false);
    })
    .then(() => {
      fetchData();
    });
  };

  if (form) {
    return (
      <Form onSubmit={handleSave}>
          <Label>
            Edit the meal:
          </Label>
            <TextArea value={dinner} onChange={handleChange} />
          <Button type="submit">Save</Button>
      </Form>
    )
  } else {
    return null;
  }
};

export default EditMeal;