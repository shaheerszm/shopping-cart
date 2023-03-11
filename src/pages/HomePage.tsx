import styled from 'styled-components';
import { Link } from 'react-router-dom'

const HomePage = () =>  {
  return (
    <MainWrapper>
      Welcome to the WebStore!
    </MainWrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
const MainWrapper = styled.main`
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 4rem;
`

export default HomePage;