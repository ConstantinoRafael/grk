import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  espanhaVinhos,
  greciaVinhosDomaine,
  greciaVinhosZacharias,
  portugalVinhos,
  portugalVinhosCondado,
  portugalVinhosHedade,
  portugalVinhosVale,
} from "../constants/BD";

export default function SideBar({
  setGreciaListDomaine,
  setGreciaListZacharias,
  setPortugalListCondado,
  setPortugalListHedade,
  setPortugalListVale,
  setEspanhaList,
}) {
  const navigate = useNavigate();
  // console.log(greciaVinhos[0].uvas.includes("Chardonnay"));

  // const chardonnayList = greciaVinhos.filter((g) =>
  //   g.uvas.includes("Chardonnay")
  // );
  // console.log(chardonnayList);

  // for (let i = 0; i < greciaVinhos.length; i++) {
  //   const chardonnayList = []
  //   if(greciaVinhos[i].uvas.includes("Chardonnay")) {
  //     chardonnayList.push(greciaVinhos[i])

  //   }

  //   console.log(chardonnayList)
  // }

  function showGrecia() {
    navigate("/vinhos");
    setGreciaListDomaine(greciaVinhosDomaine);
    setGreciaListZacharias(greciaVinhosZacharias);
    setPortugalListCondado([]);
    setPortugalListHedade([]);
    setPortugalListVale([]);
    setEspanhaList([]);
  }

  function showPortugal() {
    navigate("/vinhos");
    setGreciaListDomaine([]);
    setGreciaListZacharias([]);
    setPortugalListCondado(portugalVinhosCondado);
    setPortugalListHedade(portugalVinhosHedade);
    setPortugalListVale(portugalVinhosVale);
    setEspanhaList([]);
  }

  function showEspanha() {
    navigate("/vinhos");
    setGreciaListDomaine([]);
    setGreciaListZacharias([]);
    setPortugalListCondado([]);
    setPortugalListHedade([]);
    setPortugalListVale([]);
    setEspanhaList(espanhaVinhos);
  }

  function showBranco() {
    navigate("/vinhos");
    const greciaDomaine = greciaVinhosDomaine.filter(
      (g) => g.tipo === "branco"
    );
    setGreciaListDomaine(greciaDomaine);
    const greciaZacharias = greciaVinhosZacharias.filter(
      (g) => g.tipo === "branco"
    );
    setGreciaListZacharias(greciaZacharias);
    const portugalCondado = portugalVinhosCondado.filter(
      (p) => p.tipo === "branco"
    );
    setPortugalListCondado(portugalCondado);
    const portugalHedade = portugalVinhosHedade.filter(
      (p) => p.tipo === "branco"
    );
    setPortugalListHedade(portugalHedade);
    const portugalVale = portugalVinhosVale.filter((p) => p.tipo === "branco");
    setPortugalListVale(portugalVale);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "branco");
    setEspanhaList(espanha);
  }

  function showRose() {
    navigate("/vinhos");
    const greciaDomaine = greciaVinhosDomaine.filter((g) => g.tipo === "rose");
    setGreciaListDomaine(greciaDomaine);
    const greciaZacharias = greciaVinhosZacharias.filter(
      (g) => g.tipo === "rose"
    );

    console.log(greciaZacharias);
    setGreciaListZacharias(greciaZacharias);
    const portugalCondado = portugalVinhosCondado.filter(
      (p) => p.tipo === "rose"
    );
    setPortugalListCondado(portugalCondado);
    const portugalHedade = portugalVinhosHedade.filter(
      (p) => p.tipo === "rose"
    );
    setPortugalListHedade(portugalHedade);
    const portugalVale = portugalVinhosVale.filter((p) => p.tipo === "rose");
    setPortugalListVale(portugalVale);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "rose");
    setEspanhaList(espanha);
  }

  function showTinto() {
    navigate("/vinhos");
    const greciaDomaine = greciaVinhosDomaine.filter((g) => g.tipo === "tinto");
    setGreciaListDomaine(greciaDomaine);
    const greciaZacharias = greciaVinhosZacharias.filter(
      (g) => g.tipo === "tinto"
    );
    setGreciaListZacharias(greciaZacharias);
    const portugalCondado = portugalVinhosCondado.filter(
      (p) => p.tipo === "tinto"
    );
    setPortugalListCondado(portugalCondado);
    const portugalHedade = portugalVinhosHedade.filter(
      (p) => p.tipo === "tinto"
    );
    setPortugalListHedade(portugalHedade);
    const portugalVale = portugalVinhosVale.filter((p) => p.tipo === "tinto");
    setPortugalListVale(portugalVale);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "tinto");
    setEspanhaList(espanha);
  }

  function showEspumante() {
    navigate("/vinhos");
    const greciaDomaine = greciaVinhosDomaine.filter(
      (g) => g.tipo === "espumante"
    );
    setGreciaListDomaine(greciaDomaine);
    const greciaZacharias = greciaVinhosZacharias.filter(
      (g) => g.tipo === "espumante"
    );
    setGreciaListZacharias(greciaZacharias);
    const portugalCondado = portugalVinhosCondado.filter(
      (p) => p.tipo === "espumante"
    );
    setPortugalListCondado(portugalCondado);
    const portugalHedade = portugalVinhosHedade.filter(
      (p) => p.tipo === "espumante"
    );
    setPortugalListHedade(portugalHedade);
    const portugalVale = portugalVinhosVale.filter(
      (p) => p.tipo === "espumante"
    );
    setPortugalListVale(portugalVale);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "espumante");
    setEspanhaList(espanha);
  }

  // function showAgiorgitiko() {
  //   const agiogirtikoG = greciaVinhos.filter((g) =>
  //     g.uvas.includes("Agiogirtiko")
  //   );
  //   setGreciaList(agiogirtikoG);
  //   const agiogirtikoP = portugalVinhos.filter((g) =>
  //     g.uvas.includes("Agiogirtiko")
  //   );
  //   setPortugalList(agiogirtikoP);
  //   const agiogirtikoE = espanhaVinhos.filter((g) =>
  //     g.uvas.includes("Agiogirtiko")
  //   );
  //   setEspanhaList(agiogirtikoE);
  // }

  return (
    <>
      <OpcoesMenu>
        <Opcoes>
          <h1>país</h1>

          <Opcao onClick={() => setTimeout(showGrecia, 100)}>Grécia</Opcao>
          <Opcao onClick={() => setTimeout(showPortugal, 100)}>Portugal</Opcao>
          <Opcao onClick={() => setTimeout(showEspanha, 100)}>Espanha</Opcao>

          <h1>tipo de vinho</h1>
          <Opcao onClick={() => setTimeout(showBranco, 100)}>Branco</Opcao>
          <Opcao onClick={() => setTimeout(showRose, 100)}>Rosé</Opcao>
          <Opcao onClick={() => setTimeout(showTinto, 100)}>Tinto</Opcao>
          <Opcao onClick={() => setTimeout(showEspumante, 100)}>
            Espumante
          </Opcao>
          {/* <h1>tipos de uva</h1>
          <Opcao onClick={() => showAgiorgitiko}>Agiorgitiko</Opcao>
          <Opcao>Aragonez</Opcao>
          <Opcao>Arinto</Opcao>
          <Opcao>Assyrtiko</Opcao>
          <Opcao>Cabernet</Opcao>
          <Opcao>Cabernet Sauvignon</Opcao>
          <Opcao>Chardonnay</Opcao>
          <Opcao>Malagouzia</Opcao>
          <Opcao>Merlot</Opcao>
          <Opcao>Moscato</Opcao>
          <Opcao>Perellada</Opcao>
          <Opcao>Petit Verdot</Opcao>
          <Opcao>Sauvignon Blanc</Opcao>
          <Opcao>Syrah</Opcao>
          <Opcao>Tinta Rotiz</Opcao>
          <Opcao>Touriga</Opcao>
          <Opcao>Touriga Franca</Opcao>
          <Opcao>Viognier</Opcao>
          <Opcao>Verdelho</Opcao>
          <Opcao>Vinhas Velhas</Opcao>
          <Opcao>Xarel.lo</Opcao> */}
        </Opcoes>
      </OpcoesMenu>
    </>
  );
}

const OpcoesMenu = styled.div`
  height: 100%;
  width: auto;
`;

const Opcoes = styled.div`
  padding: 0px 20px 20px 20px;

  h1 {
    font-size: 25px;
    margin-bottom: 10px;
    padding-top: 20px;
  }
`;

const Opcao = styled.div`
  color: #736357;
  font-size: 20px;
  padding: 5px 0px 5px 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px rgba(33, 33, 33, 0.2);
  }
`;
