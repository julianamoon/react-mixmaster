import styled from "styled-components";
import { Form, useNavigation } from "react-router-dom";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import TitleIcon from "@mui/icons-material/Title";
import ScienceIcon from "@mui/icons-material/Science";
import WineBarIcon from "@mui/icons-material/WineBar";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <div className="info">
        <p>Discover the art of mixology, one recipe at a time.</p>
      </div>

      <div className="icons-container">
        <ul>
          <li>
            <TitleIcon />
            <p>Name</p>
          </li>

          <li>
            <ScienceIcon />
            <p>Ingredients</p>
          </li>

          <li>
            <WineBarIcon />
            <p>Glass</p>
          </li>
        </ul>
      </div>

      <Form className="form-search">
        <input
          type="search"
          name="search"
          className="input-search"
          defaultValue={searchTerm}
          placeholder="Find Your Drink"
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : <LocalBarIcon />}
        </button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: auto;
  border-bottom: 1.5px dashed black;
  padding: 40px 0;
  .form-search {
    display: flex;
    justify-content: center;
    margin: 20px 0 0 0;
    /* outline: 1px solid red; */
  }
  .input-search {
    width: 400px;
    height: 2rem;
    padding: 4px 8px;
  }
  .btn {
    height: 2rem;
    background: black;
    border: none;
    color: white;
  }
  .info {
    text-align: center;
  }
  ul {
    display: flex;
    gap: 10px;
    text-align: center;
    justify-content: center;
    margin: 10px 0;
  }
`;

export default SearchForm;
