import React from 'react';
import styled from 'styled-components';

import Board from './Board.jsx';
import Today from './Date.jsx';

const Container = styled.div`
  background: url(https://dinnerplans.s3-us-west-1.amazonaws.com/background_3.jpg) no-repeat center center fixed;
  background-size: cover;
  background-color: rgb(250,250,250);
  min-height: 100%;
  min-width: 100%;
  font-family: Montserrat, "Helvetica Neue", sans-serif;
  color: #282828;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 5em;
  padding-top: 1%;
  color: #3f6942;
  padding-top: 2%;
  margin: 0 10%;
  width: 80%;
`;

const Tagline = styled.h2`
  text-align: center;
  color: #282828;
  font-size: x-large;
  margin: 0 0 1% 0;
`;

const Blurb = styled.h2`
  text-align: center;
  color: #282828;
  font-size: large;
  margin: 1% 0 0 0;
`;

const App = (props) => {
  return (
    <Container>
      <Title>DinnerPlans</Title>
      <Tagline>For anyone who eats.</Tagline>
      <Blurb>Search for an idea or add a meal. Plan your week ahead.</Blurb>
      <Board />
      <Today />
    </Container>
  )
}

export default App;
