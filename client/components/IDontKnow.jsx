import React, { useState } from 'react';
import styled from 'styled-components';

import Search from './Search.jsx';

const Button = styled.button`
  border: 1px solid #b63d46;
  border-radius: 10px;
  background-color: #b63d46;
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
    border: 1px solid #b63d46;
    background-color: #f0f1f2;
    color: #b63d46;
  }
`;

const IDontKnow = ({ weekday, fetchData }) => {
  const [idea, setIdea] = useState(false);

  let search;
  if (idea) {
    search = <Search weekday={weekday} fetchData={fetchData} />;
  } else {
    search = null;
  }

  return (
    <div>
      <Button onClick={() => {setIdea(true)}}>Help me!</Button>
      {search}
    </div>
  );
};

export default IDontKnow;