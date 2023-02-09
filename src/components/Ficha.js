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

export default function Ficha() {
  const { name } = useParams();

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
      <Header></Header>
      <FichaToda>
        <SideBar></SideBar>

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
