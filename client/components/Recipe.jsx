import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Button } from './styled/Button.jsx';

const Ingredients = styled.div`
  text-align: left;
  color: #282828;
  font-size: small;
  margin: 2%;
  padding: 1%;
`;

const RecipeNameLink = styled.a`
  text-align: left;
  color: #282828;
  font-size: medium;
  margin: 2%;
  padding: 1%;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const Recipe = ({ idea, weekday, fetchData }) => {

  const handleSave = (event) => {
    event.preventDefault();
    axios.post('/dinnerplans', {
      dinner: idea[i].title,
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

  let i = Math.floor(Math.random() * (10 - 0) + 0);

  return (
    <div>
      <RecipeNameLink href={idea[i].href}>{idea[i].title}</RecipeNameLink>
      <Ingredients><b>ingredients:</b> {idea[i].ingredients}</Ingredients>
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};

export default Recipe;