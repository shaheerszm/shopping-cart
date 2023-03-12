import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Error>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Error>
  );
}

const Error = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 20px;
  font-size: 3rem;
`