import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid #282828;
  border-radius: 10px;
  background-color: #f0f1f2;
  color: #282828;
  font-size: small;
  text-align: center;
  font-family: Montserrat, "Helvetica Neue", sans-serif;
  padding: .3em;
  min-width: 50px;
  cursor: pointer;
  float: right;
  margin: 2% 0;

  &:hover {
    border: 1px solid #f0f1f2;
    background-color: #282828;
    color: #f0f1f2;
  }
`;
