import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Options from './Options.jsx';
import Meal from './Meal.jsx';

const EachDay = styled.div`
  font-size: medium;
  width: 20%;
`;

const NameDay = styled.h3`
  border: 2px solid #ef806e;
  background-color: #ef806e;
  border-radius: 10px;
  font-size: large;
  text-align: center;
  margin: 5% 3% 0 3%;
  color: #282828;
`;

const Day = ({ weekday }) => {
  const [plan, setPlan] = useState([]);

  const fetchData = async () => {
    await axios.get(`/dinnerplans/${weekday}`)
    .then((res) => {
      setPlan(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  let content;
  if (plan.length === 0) {
    content = <Options weekday={weekday} fetchData={fetchData} />;
  } else {
    content = <Meal plan={plan} fetchData={fetchData} />;
  }

  return (
    <EachDay>
      <NameDay>{weekday}</NameDay>
      {content}
    </EachDay>
  );
};

export default Day;