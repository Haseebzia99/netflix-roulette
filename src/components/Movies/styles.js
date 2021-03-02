import styled from "styled-components";

import {
  darkWhite,
  grey,
} from "../../styles/colors";

export const MovieContainer = styled.div`
  display: grid;
  justify-content: center;
  margin: 1rem 0;
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  color: ${darkWhite};
  font-weight: 400;
`;

export const Description = styled.div`
  font-size: 1.3rem;
  color: ${grey};
  font-weight: 400;
`;

export const Year = styled.div`
  border: 1px solid ${darkWhite};
  padding: 0.25rem 1rem;
  border-radius: 0.4rem;
  font-size: 1.3rem;
  color: ${darkWhite};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;