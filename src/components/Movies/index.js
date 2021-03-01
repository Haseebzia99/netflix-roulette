import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { error } from "../../components/404error";

import {
  MovieContainer,
  Title,
  TitleContainer,
  DescriptionContainer,
  Description,
  Year,
} from "./styles";

export const Movie = () => {
  return (
    <>        
    <Router>
      <Link to="/404error" component={error}>
        <MovieContainer>
            <TitleContainer>
                <Title>Movie</Title>
                <Year>2021</Year>
            </TitleContainer>    
            <DescriptionContainer>
            <Description>This is a movies test</Description>
            </DescriptionContainer>
        </MovieContainer>
      </Link>
    </Router>
    </>
  );
};
