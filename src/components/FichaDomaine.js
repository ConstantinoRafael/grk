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

export default function FichaDomaine() {
  const { name } = useParams();

  const vinho = greciaVinhosDomaine.filter((g) => g.url === name);

  console.log(vinho[0]);

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
                <spam>SAFRA</spam>:{vinho[0].safra}
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
`;

const FotoVinho = styled.div``;

const Dados = styled.div``;

const FotoEDados = styled.div`
  display: flex;
`;
