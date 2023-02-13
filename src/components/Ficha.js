import Header from "./Header";
import SideBar from "./SideBar";
import { useParams } from "react-router-dom";
import {
  greciaVinhosZacharias,
  greciaVinhosDomaine,
  portugalVinhos,
  espanhaVinhos,
} from "../constants/BD";
import WhatsappButton from "./WhatsappButton";
import styled from "styled-components";
import { useState } from "react";
import SideBarMobile from "./SideBarMobile";
import HeaderMobile from "./HeaderMobile";

export default function Ficha() {
  const { name } = useParams();

  const [greciaListDomaine, setGreciaListDomaine] =
    useState(greciaVinhosDomaine);
  const [greciaListZacharias, setGreciaListZacharias] = useState(
    greciaVinhosZacharias
  );

  const [portugalList, setPortugalList] = useState(portugalVinhos);
  const [espanhaList, setEspanhaList] = useState(espanhaVinhos);
  const [showMenu, setShowMenu] = useState(false);

  let vinho;

  const vinhoDomaine = greciaVinhosDomaine.filter((g) => g.url === name);
  const vinhoZacharias = greciaVinhosZacharias.filter((g) => g.url === name);
  const vinhoPortugal = portugalVinhos.filter((g) => g.url === name);
  const vinhoEspanha = espanhaVinhos.filter((g) => g.url === name);

  if (vinhoDomaine.length > 0) {
    vinho = vinhoDomaine;
  }

  if (vinhoZacharias.length > 0) {
    vinho = vinhoZacharias;
  }

  if (vinhoPortugal.length > 0) {
    vinho = vinhoPortugal;
  }

  if (vinhoEspanha.length > 0) {
    vinho = vinhoEspanha;
  }

  return (
    <>
      <WhatsappButton />

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

      <FichaToda>
        <SideBarDiv>
          <SideBar
            greciaListDomaine={greciaListDomaine}
            setGreciaListDomaine={setGreciaListDomaine}
            greciaListZacharias={greciaListZacharias}
            setGreciaListZacharias={setGreciaListZacharias}
            portugalList={portugalList}
            setPortugalList={setPortugalList}
            espanhaList={espanhaList}
            setEspanhaList={setEspanhaList}
          />
        </SideBarDiv>
        <Fichinha>
          <h1>{vinho[0].nome}</h1>

          <FotoEDados>
            <FotoVinho>
              <img src={vinho[0].image} alt="foto da garrafa"></img>
            </FotoVinho>
            <Dados>
              <p>
                <spam> ORIGEM Produtora</spam>: {vinho[0].produtora}
              </p>
              <p>
                <spam>Região</spam>: {vinho[0].região}
              </p>
              <p>
                <spam>CASTAS Uvas</spam>: {vinho[0].uvas}
              </p>
              <p>
                <spam>SAFRA</spam>: {vinho[0].safra}
              </p>
              <p>
                <spam>HARMONIZAÇÃO</spam>: {vinho[0].harmonizacao}
              </p>
              <p>
                <spam>NOTAS</spam>: {vinho[0].notas}
              </p>
            </Dados>
          </FotoEDados>
        </Fichinha>
      </FichaToda>
    </>
  );
}

const FichaToda = styled.div`
  display: flex;
`;

const Fichinha = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-left: 40px;
    font-size: 40px;
    font-weight: bold;
    margin-top: 30px;
  }

  img {
    margin: 50px;
  }

  p {
    margin: 5px;
  }
`;

const FotoVinho = styled.div``;

const Dados = styled.div`
  width: 600px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FotoEDados = styled.div`
  display: flex;
`;

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
