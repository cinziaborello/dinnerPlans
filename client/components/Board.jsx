import React from 'react';
import styled from 'styled-components';

import Day from './Day.jsx';

const Week = styled.div`
  background-color: #e9c7a7;
  border: 2px solid white;
  border-radius: 15px;
  width: 80%;
  margin: 2% 10%;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: center;
  min-height: 40%;
`;

const Board = (props) => (
  <Week>
    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((weekday, i) => (
      <Day
      weekday={weekday}
      key={i + 1}
      /> ))}
  </Week>
);

export default Board;