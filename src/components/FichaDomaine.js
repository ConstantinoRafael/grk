import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom"
import Header from "./Header.js"
import Espanha from "../components/Espanha";
import Grecia from "../components/Grecia";
import HeaderMobile from "../components/HeaderMobile";
import Portugal from "../components/Portugal";
import SideBar from "../components/SideBar";
import SideBarMobile from "../components/SideBarMobile";
import { espanhaVinhos, greciaVinhos, greciaVinhosDomaine, greciaVinhosZacharias, portugalVinhos } from "../constants/BD";


export default function FichaDomaine() {
    const [greciaListDomaine, setGreciaListDomaine] =
    useState(greciaVinhosDomaine);
    const [greciaListZacharias, setGreciaListZacharias] =
    useState(greciaVinhosZacharias);
  const [greciaList, setGreciaList] = useState(greciaVinhos);
  const [portugalList, setPortugalList] = useState(portugalVinhos);
  const [espanhaList, setEspanhaList] = useState(espanhaVinhos);

    const {name} = useParams();
    const [showMenu, setShowMenu] = useState(false);

    const vinho = greciaVinhosDomaine.filter((g) => (g.url === name))

    


    return <>
    <HeaderDiv>
        <Header />
      </HeaderDiv>

      <HeaderDivMobile>
        <HeaderMobile setShowMenu={setShowMenu} />
      </HeaderDivMobile>
      {showMenu ? (
        <SideBarMobileDiv>
          <SideBarMobile
            greciaListDomaine={greciaListDomaine}
            setGreciaListDomaine={setGreciaListDomaine}
            greciaListZacharias={greciaListZacharias}
            setGreciaListZacharias={setGreciaListZacharias}
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
            greciaListDomaine={greciaListDomaine}
            setGreciaListDomaine={setGreciaListDomaine}
            greciaListZacharias={greciaListZacharias}
            setGreciaListZacharias={setGreciaListZacharias}
            greciaList={greciaList}
            setGreciaList={setGreciaList}
            portugalList={portugalList}
            setPortugalList={setPortugalList}
            espanhaList={espanhaList}
            setEspanhaList={setEspanhaList}
          />
        </SideBarDiv>

        
        
      </WineList>
   
    </>
}

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
