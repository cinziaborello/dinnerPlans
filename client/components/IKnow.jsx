import React, { useState } from 'react';
import styled from 'styled-components';

import AddMeal from './AddMeal.jsx';

const Button = styled.button`
  border: 1px solid #74947c;
  border-radius: 10px;
  background-color: #74947c;
  color: #f0f1f2;
  font-size: large;
  text-align: center;
  font-family: Montserrat, "Helvetica Neue", sans-serif;
  font-weight: bold;
  padding: .5em;
  min-width: 50px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 5%;

  &:hover {
    border: 1px solid #74947c;
    background-color: #f0f1f2;
    color: #74947c;
  }
`;

const IKnow = ({ weekday, fetchData }) => {
  const [idea, setIdea] = useState(false);

  let input;
  if (idea) {
    input = <AddMeal weekday={weekday} fetchData={fetchData} />;
  } else {
    input = null;
  }

  return (
    <div>
      <Button onClick={() => {setIdea(true)}}>Add a meal</Button>
      {input}
    </div>
  );
};

export default IKnow;