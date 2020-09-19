import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Button } from './styled/Button.jsx';

const DeleteMeal = ({ weekday, fetchData }) => {

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`/dinnerplans/${weekday}`)
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
    <div>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default DeleteMeal;