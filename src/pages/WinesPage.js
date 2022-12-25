import { useState } from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import Espanha from "../components/Espanha";
import Grecia from "../components/Grecia";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Portugal from "../components/Portugal";
import SideBar from "../components/SideBar";
import SideBarMobile from "../components/SideBarMobile";
import { espanhaVinhos, greciaVinhos, portugalVinhos } from "../constants/BD";

export default function WinesPage() {
  const [greciaList, setGreciaList] = useState(greciaVinhos);
  const [portugalList, setPortugalList] = useState(portugalVinhos);
  const [espanhaList, setEspanhaList] = useState(espanhaVinhos);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Wines>
      <HeaderDiv>
        <Header />
      </HeaderDiv>

      <HeaderDivMobile>
        <HeaderMobile setShowMenu={setShowMenu} />
      </HeaderDivMobile>
      {showMenu ? (
        <SideBarMobileDiv>
          <SideBarMobile
            greciaList={greciaList}
            setGreciaList={setGreciaList}
            portugalList={portugalList}
            setPortugalList={setPortugalList}
            espanhaList={espanhaList}
            setEspanhaList={setEspanhaList}
            setShowMenu={setShowMenu}
          />
        </SideBarMobileDiv>
      ) : (
        ""
      )}

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

const HeaderDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderDivMobile = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const WineList = styled.div`
  display: flex;
`;

const SideBarDiv = styled.div`
  height: auto;
  width: 15%;
  background-color: #e1ecf4;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SideBarMobileDiv = styled.div``;

const PaisList = styled.div`
  width: 85%;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 768px) {
    h1{
      font-size: 39px;
    }

    h2{
      font-size: 13px;
      line-height: 23px;
    }
  }
`;
