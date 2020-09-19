import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import IDontKnow from './IDontKnow.jsx';
import IKnow from './IKnow.jsx';

const Box = styled.div`
  min-height: 60%;
  font-size: medium;
  margin: 10% 3%;
  background-color: transparent;
`;

const Options = ({ weekday, fetchData }) => {
  return (
    <Box>
      <IDontKnow weekday={weekday} fetchData={fetchData} />
      <IKnow weekday={weekday} fetchData={fetchData} />
    </Box>
  );
};

export default Options;