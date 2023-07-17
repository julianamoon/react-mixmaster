import styled from "styled-components";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const CocktailCard = ({ image, name, info, glass, id }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>
          <MoreHorizIcon />
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  flex-basis: 400px;
  padding-bottom: 20px;
  position: relative;
  .img-container {
    /* outline: 2px solid red; */
    display: flex;
    justify-content: center;
  }
  img {
    width: 80%;
  }
  .footer {
    background: white;
    position: absolute;
    z-index: 10;
    top: -2%;
    left: 0%;
    padding: 10px 20px;
    border: 1px solid black;
  }
  h4 {
    font-size: 2rem;
  }
  h5,
  p {
    font-style: italic;
  }
  .btn {
    font-weight: 700;
    margin: 10px 0;
  }
`;

export default CocktailCard;
