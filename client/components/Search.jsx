import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Recipe from './Recipe.jsx';

import { Button } from './styled/Button.jsx';

const Input = styled.input`
  font-family: Montserrat, "Helvetica Neue", sans-serif;
  margin: 2% 0 6% 0;
  width: 75%;
  height: 2em;
`;

const Search = ({ weekday, fetchData }) => {
  const [keyword, setKeyword] = useState('');
  const [idea, setIdea] = useState([]);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    axios.get(`/recipes/${keyword}`)
    .then((res) => {
      setIdea(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  let content;
  if (idea.length !== 0) {
    content = <Recipe idea={idea} weekday={weekday} fetchData={fetchData} />;
  } else {
    content = null;
  }

  return (
    <div>
      <Input type="text" value={keyword} onChange={handleChange} />
      <Button onClick={handleSearch}>Search</Button>
      {content}
    </div>
  );
};

export default Search;