import { FunctionComponent } from 'react'
import styled from 'styled-components';

type CardProps = {
  title: string,
  paragraph?: string
}

const HomePage: FunctionComponent<CardProps> = ({ title }) =>  {
  return (
  <Wrapper>
    {title}
  </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4em;
  background-color: papayawhip;
`;

export default HomePage;