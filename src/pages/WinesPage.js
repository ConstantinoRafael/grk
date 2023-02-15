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
import WhatsappButton from "../components/WhatsappButton";
import {
  espanhaVinhos,
  greciaVinhos,
  greciaVinhosDomaine,
  greciaVinhosZacharias,
  portugalVinhos,
  portugalVinhosCondado,
  portugalVinhosHedade,
  portugalVinhosVale,
} from "../constants/BD";

export default function WinesPage() {
  const [greciaListDomaine, setGreciaListDomaine] =
    useState(greciaVinhosDomaine);
  const [greciaListZacharias, setGreciaListZacharias] = useState(
    greciaVinhosZacharias
  );
  const [greciaList, setGreciaList] = useState(greciaVinhos);
  const [portugalListCondado, setPortugalListCondado] = useState(
    portugalVinhosCondado
  );
  const [portugalListHedade, setPortugalListHedade] =
    useState(portugalVinhosHedade);
  const [portugalListVale, setPortugalListVale] = useState(portugalVinhosVale);
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

      <WhatsappButton />
      {showMenu ? (
        <SideBarMobileDiv>
          <SideBarMobile
            greciaListDomaine={greciaListDomaine}
            setGreciaListDomaine={setGreciaListDomaine}
            greciaListZacharias={greciaListZacharias}
            setGreciaListZacharias={setGreciaListZacharias}
            greciaList={greciaList}
            setGreciaList={setGreciaList}
            portugalListCondado={portugalListCondado}
            setPortugalListCondado={setPortugalListCondado}
            portugalListHedade={portugalListHedade}
            setPortugalListHedade={setPortugalListHedade}
            portugalListVale={portugalListVale}
            setPortugalListVale={setPortugalListVale}
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
            portugalListCondado={portugalListCondado}
            setPortugalListCondado={setPortugalListCondado}
            portugalListHedade={portugalListHedade}
            setPortugalListHedade={setPortugalListHedade}
            portugalListVale={portugalListVale}
            setPortugalListVale={setPortugalListVale}
            espanhaList={espanhaList}
            setEspanhaList={setEspanhaList}
          />
        </SideBarDiv>

        <PaisList>
          <PaisWines>
            {greciaListDomaine.length !== 0 ||
            greciaListZacharias.length !== 0 ? (
              <Grecia
                greciaListDomaine={greciaListDomaine}
                greciaListZacharias={greciaListZacharias}
                greciaList={greciaList}
              />
            ) : (
              ""
            )}
          </PaisWines>
          <PaisWines>
            {portugalListCondado.length !== 0 ||
            portugalListHedade.length !== 0 ||
            portugalListVale.length !== 0 ? (
              <Portugal
                portugalListCondado={portugalListCondado}
                portugalListHedade={portugalListHedade}
                portugalListVale={portugalListVale}
              />
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

  h3 {
    text-align: end;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 39px;
    }

    h2 {
      font-size: 13px;
      line-height: 23px;
    }
  }
`;
