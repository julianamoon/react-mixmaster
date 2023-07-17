import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <h1 className="logo" onClick={backHome}>
          MixMaster
        </h1>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  /* outline: 2px solid red; */
  padding: 20px 20px;
  .nav-center {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  }
  h1 {
    font-size: 3rem;
    cursor: pointer;
  }
  .nav-links {
    display: flex;
    gap: 10px;
    color: black;
  }
  .active {
    font-weight: 700;
  }
  @media (max-width: 768px) {
    padding-bottom: 0;
    .nav-center {
      flex-direction: column;
      gap: 5px;
    }
  }
`;

export default Navbar;
