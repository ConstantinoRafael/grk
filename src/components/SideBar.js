import styled from "styled-components";
import { espanhaVinhos, greciaVinhos, portugalVinhos } from "../constants/BD";

export default function SideBar({
  setGreciaList,
  setPortugalList,
  setEspanhaList,
}) {
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

  return (
    <>
      <Paises>
        <h1>País</h1>
        <Form>
          <div>
            <input
              id="grecia"
              type="radio"
              name="País"
              value="Grécia"
              onChange={showGrecia}
            ></input>
            <label htmlFor="grecia">Grécia</label>
          </div>
          <div>
            <input
              id="portugal"
              type="radio"
              name="País"
              value="Portugal"
              onChange={showPortugal}
            ></input>
            <label htmlFor="portugal">Portugal</label>
          </div>
          <div>
            <input
              id="espanha"
              type="radio"
              name="País"
              value="Espanha"
              onChange={showEspanha}
            ></input>
            <label htmlFor="espanha">Espanha</label>
          </div>
        </Form>
      </Paises>
      <TiposDeVinho>
        <h1>Tipos de Vinho</h1>
        <Form>
          <div>
            <input
              id="branco"
              type="radio"
              name="Tipos de Vinhos"
              value="branco"
              onChange={showBranco}
            ></input>
            <label htmlFor="branco">Branco</label>
          </div>
          <div>
            <input
              id="rose"
              type="radio"
              name="Tipos de Vinhos"
              value="rose"
              onChange={showRose}
            ></input>
            <label htmlFor="rose">Rosé</label>
          </div>
          <div>
            <input
              id="tinto"
              type="radio"
              name="Tipos de Vinhos"
              value="tinto"
              onChange={showTinto}
            ></input>
            <label htmlFor="tinto">Tinto</label>
          </div>
          <div>
            <input
              id="espumante"
              type="radio"
              name="Tipos de Vinhos"
              value="espumante"
              onChange={showEspumante}
            ></input>
            <label htmlFor="espumante">Espumante</label>
          </div>
        </Form>
      </TiposDeVinho>
    </>
  );
}

const Paises = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }
`;

const TiposDeVinho = styled.div``;
