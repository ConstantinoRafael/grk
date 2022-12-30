import styled from "styled-components";
import { espanhaVinhos, greciaVinhos, portugalVinhos } from "../constants/BD";

export default function SideBar({
  setGreciaList,
  setPortugalList,
  setEspanhaList,
}) {
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
    setGreciaList(greciaVinhos);
    setPortugalList([]);
    setEspanhaList([]);
  }

  function showPortugal() {
    setGreciaList([]);
    setPortugalList(portugalVinhos);
    setEspanhaList([]);
  }

  function showEspanha() {
    setGreciaList([]);
    setPortugalList([]);
    setEspanhaList(espanhaVinhos);
  }

  function showBranco() {
    const grecia = greciaVinhos.filter((g) => g.tipo === "branco");
    setGreciaList(grecia);
    const portugal = portugalVinhos.filter((p) => p.tipo === "branco");
    setPortugalList(portugal);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "branco");
    setEspanhaList(espanha);
  }

  function showRose() {
    const grecia = greciaVinhos.filter((g) => g.tipo === "rose");
    setGreciaList(grecia);
    const portugal = portugalVinhos.filter((p) => p.tipo === "rose");
    setPortugalList(portugal);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "rose");
    setEspanhaList(espanha);
  }

  function showTinto() {
    const grecia = greciaVinhos.filter((g) => g.tipo === "tinto");
    setGreciaList(grecia);
    const portugal = portugalVinhos.filter((p) => p.tipo === "tinto");
    setPortugalList(portugal);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "tinto");
    setEspanhaList(espanha);
  }

  function showEspumante() {
    const grecia = greciaVinhos.filter((g) => g.tipo === "espumante");
    setGreciaList(grecia);
    const portugal = portugalVinhos.filter((p) => p.tipo === "espumante");
    setPortugalList(portugal);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "espumante");
    setEspanhaList(espanha);
  }

  function showAgiorgitiko() {
    const agiogirtikoG = greciaVinhos.filter((g) =>
      g.uvas.includes("Agiogirtiko")
    );
    setGreciaList(agiogirtikoG);
    const agiogirtikoP = portugalVinhos.filter((g) =>
      g.uvas.includes("Agiogirtiko")
    );
    setPortugalList(agiogirtikoP);
    const agiogirtikoE = espanhaVinhos.filter((g) =>
      g.uvas.includes("Agiogirtiko")
    );
    setEspanhaList(agiogirtikoE)
  }

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
          <h1>tipos de uva</h1>
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
          <Opcao>Xarel.lo</Opcao>
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
