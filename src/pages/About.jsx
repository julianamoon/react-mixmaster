import styled from "styled-components";
import img from "../assets/pexels-energepiccom-110472.jpg";

const About = () => {
  return (
    <Wrapper>
      <img src={img} alt="cocktails" />
      <div className="info">
        <h3 className="title">About Us</h3>
        <p>
          Introducing "MixMaster," the ultimate party sidekick app that fetches
          cocktails from the hilarious Cocktails DB API. With a flick of your
          finger, you'll unlock a treasure trove of enchanting drink recipes
          that'll make your taste buds dance and your friends jump with joy. Get
          ready to shake up your mixology game, one fantastical mocktail at a
          time, and let the laughter and giggles flow!
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    z-index: -10;
  }
  .info {
    /* outline: 2px solid red; */
    border: 1.5px solid black;
    width: 400px;
    background: white;
    padding: 20px;
    margin: 0 auto;
    transform: translateY(20px);
    h3 {
      margin-bottom: 2rem;
      text-align: center;
      font-size: 2rem;
    }
  }
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

export default About;
