import styled from "styled-components";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="404" />
          <h3>Ops!</h3>
          <p>We can't seem to find the page you're looking for.</p>
          <Link to="/">I want to go Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong!</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  outline: 2px solid red;
`;

export default Error;
