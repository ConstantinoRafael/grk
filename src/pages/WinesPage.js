import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo-branco-grk.png";
import Espanha from "../components/Espanha";
import Grecia from "../components/Grecia";
import Portugal from "../components/Portugal";
import SideBar from "../components/SideBar";
import { espanhaVinhos, greciaVinhos, portugalVinhos } from "../constants/BD";

export default function WinesPage() {
  const [greciaList, setGreciaList] = useState(greciaVinhos);
  const [portugalList, setPortugalList] = useState(portugalVinhos);
  const [espanhaList, setEspanhaList] = useState(espanhaVinhos);

  return (
    <Wines>
      <Header>
        <Link to={"/"}>
          <p>a grk</p>
        </Link>
        <p>vinhos</p>
        <img src={logo} alt="logo grk" />
        <p>destilados</p>
        <p>contato</p>
      </Header>

      <WineList>
        <SideBarDiv>
          <SideBar
            greciaList={greciaList}
            setGreciaList={setGreciaList}
            portugalList={portugalList}
            setPortugalList={setPortugalList}
            espanhaList={espanhaList}
            setEspanhaList={setEspanhaList}
          />
        </SideBarDiv>
        <PaisList>
          <PaisWines>
            {greciaList.length !== 0 ? <Grecia greciaList={greciaList} /> : ""}
          </PaisWines>
          <PaisWines>
            {portugalList.length !== 0 ? (
              <Portugal portugalList={portugalList} />
            ) : (
              ""
            )}
          </PaisWines>
          <PaisWines>
            {espanhaList.length !== 0 ? (
              <Espanha espanhaList={espanhaList} />
            ) : (
              ""
            )}
          </PaisWines>
        </PaisList>
      </WineList>
    </Wines>
  );
}

const Wines = styled.div``;

const Header = styled.div`
  height: 300px;
  width: auto;
  background-color: #68b0d4;
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    color: #ffffff;
    font-size: 24px;
  }

  a {
    text-decoration: none;
  }
`;

const WineList = styled.div`
  display: flex;
`;

const SideBarDiv = styled.div`
  height: auto;
  width: 20vw;
  background-color: #e1ecf4;
`;

const PaisList = styled.div`
  width: 80vw;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
`;

const PaisWines = styled.div`
  h1 {
    font-size: 60px;
    margin: 5px 0px;
  }

  h2 {
    margin-top: 20px;
    color: #736357;
    font-size: 24px;
    margin-bottom: 20px;
    line-height: 35px;
  }
`;
