import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import EditMeal from './EditMeal.jsx';
import DeleteMeal from './DeleteMeal.jsx';

import { Button } from './styled/Button.jsx';

const Box = styled.div`
  min-height: 60%;
  font-size: medium;
  margin: 10% 3%;
  padding: 3%;
  border: 1px solid #f0f1f2;
  background-color: #ece4e5;
  border-radius: 10px;
`;

const Plan = styled.div`
  text-align: left;
  color: #282828;
  font-size: medium;
  font-weight: bold;
  margin: 2%;
  padding: 1%;
`;

const Meal = ({ plan, fetchData }) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  let content;
  if (edit) {
    content = <EditMeal plan={plan[0].dinner} weekday={plan[0].weekday} fetchData={fetchData} />;
  } else {
    content = null;
  }

  return (
    <Box>
      <Plan>{plan[0].dinner}</Plan>
      <DeleteMeal weekday={plan[0].weekday} fetchData={fetchData} />
      <Button onClick={handleEdit}>Edit</Button>
      {content}
    </Box>
  );
};

export default Meal;