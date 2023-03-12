import styled from 'styled-components';
import { Link } from 'react-router-dom'
import homepageImage from '../assets/homepage-image.png'

const HomePage = () => {
  return (
    <HomeWrapper>
      <Message>
        <BigMessage>Find anything you ever wanted...</BigMessage>
        <Link to={'/shop'}>
          <button>
            Shop now!
          </button>
        </Link>
      </Message>
      <Image src={homepageImage} alt="people"></Image>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  //background-color: ${({ theme }) => theme.colors.grey.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  //margin-top: 6rem;
  //padding-bottom: 20rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    align-items: center;
  }
`

const BigMessage = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 6.4rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 450px) {
    font-size: 5rem;
  }
`

const Image = styled.img`
  width: 75rem;
  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: -1;
    width: 100%;
    opacity: 0.4;
    animation: none;
  }

  @media (max-width: 600px) {
    top: 25rem;
  }
`

export default HomePage;