import React from "react";
import "./MainHero.css";
import animals from "../../assets/images";
import { Container } from "reactstrap";
import { useQuery, gql } from "@apollo/client";

const FETCH_MAIN_CARDS = gql`
  {
    mainCards {
      image
      title
    }
  }
`;

function MainHero() {
  const cardsData = useQuery(FETCH_MAIN_CARDS);

  if (cardsData.loading) {
    return <div>Loading...</div>;
  }

  if (cardsData.error) {
    return <div>Some error happened</div>;
  }

  return (
    <div className="MainHero">
      <Container>
        <div className="header-container">
          <h2>
            Find your <br /> new four-legged <br /> best friend
          </h2>
          <img src={animals.rhino} />
        </div>
        <div className="cards-container">
          {cardsData.data.mainCards.map((card) => {
            return (
              <div className="card">
                <h3>{card.title}</h3>
                <img src={animals[card.image]} style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default MainHero;
