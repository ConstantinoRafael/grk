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
    setEspanhaList([espanhaVinhos]);
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
