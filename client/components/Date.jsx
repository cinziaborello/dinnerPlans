import React from 'react';
import styled from 'styled-components';

const Datestamp = styled.div`
  text-align: center;
  width: 20%;
  margin: 0 40%;
  padding: .5%;
  font-size: large;
  font-weight: bold;
  color: #a5895f;
`;

const Today = (props) => {
  let newDate = new Date().toDateString();
  return (
    <Datestamp>
      What's for dinner today? <br />
      {newDate}
    </Datestamp>
  );
};

export default Today;