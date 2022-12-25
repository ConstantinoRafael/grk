import styled from "styled-components";
import logoAzul from "../assets/images/logo-azul.png";
import { espanhaVinhos, greciaVinhos, portugalVinhos } from "../constants/BD";

export default function SideBarMobile({
  setGreciaList,
  setPortugalList,
  setEspanhaList,
  setShowMenu,
}) {
  function showGrecia() {
    setGreciaList(greciaVinhos);
    setPortugalList([]);
    setEspanhaList([]);
    setShowMenu(false);
  }

  function showPortugal() {
    setGreciaList([]);
    setPortugalList(portugalVinhos);
    setEspanhaList([]);
    setShowMenu(false);
  }

  function showEspanha() {
    setGreciaList([]);
    setPortugalList([]);
    setEspanhaList(espanhaVinhos);
    setShowMenu(false);
  }

  function showBranco() {
    const grecia = greciaVinhos.filter((g) => g.tipo === "branco");
    setGreciaList(grecia);
    const portugal = portugalVinhos.filter((p) => p.tipo === "branco");
    setPortugalList(portugal);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "branco");
    setEspanhaList(espanha);
    setShowMenu(false);
  }

  function showRose() {
    const grecia = greciaVinhos.filter((g) => g.tipo === "rose");
    setGreciaList(grecia);
    const portugal = portugalVinhos.filter((p) => p.tipo === "rose");
    setPortugalList(portugal);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "rose");
    setEspanhaList(espanha);
    setShowMenu(false);
  }

  function showTinto() {
    const grecia = greciaVinhos.filter((g) => g.tipo === "tinto");
    setGreciaList(grecia);
    const portugal = portugalVinhos.filter((p) => p.tipo === "tinto");
    setPortugalList(portugal);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "tinto");
    setEspanhaList(espanha);
    setShowMenu(false);
  }

  function showEspumante() {
    const grecia = greciaVinhos.filter((g) => g.tipo === "espumante");
    setGreciaList(grecia);
    const portugal = portugalVinhos.filter((p) => p.tipo === "espumante");
    setPortugalList(portugal);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "espumante");
    setEspanhaList(espanha);
    setShowMenu(false);
  }

  return (
    <>
      <FundoTransparente onClick={() => setShowMenu(false)}></FundoTransparente>
      <Menu>
        <PrimeiraLinha>
          <img src={logoAzul} alt="logo grk" />
        </PrimeiraLinha>

        <OpcoesMenu>
          <Paises>
            <h1>País</h1>
            <Form>
              <div>
                <input
                  id="grecia"
                  type="radio"
                  name="vinhos"
                  value="Grécia"
                  onChange={showGrecia}
                ></input>
                <label htmlFor="grecia">Grécia</label>
              </div>
              <div>
                <input
                  id="portugal"
                  type="radio"
                  name="vinhos"
                  value="Portugal"
                  onChange={showPortugal}
                ></input>
                <label htmlFor="portugal">Portugal</label>
              </div>
              <div>
                <input
                  id="espanha"
                  type="radio"
                  name="vinhos"
                  value="Espanha"
                  onChange={showEspanha}
                ></input>
                <label htmlFor="espanha">Espanha</label>
              </div>
              <h1>Tipos de Vinho</h1>
              <div>
                <input
                  id="branco"
                  type="radio"
                  name="vinhos"
                  value="branco"
                  onChange={showBranco}
                ></input>
                <label htmlFor="branco">Branco</label>
              </div>
              <div>
                <input
                  id="rose"
                  type="radio"
                  name="vinhos"
                  value="rose"
                  onChange={showRose}
                ></input>
                <label htmlFor="rose">Rosé</label>
              </div>
              <div>
                <input
                  id="tinto"
                  type="radio"
                  name="vinhos"
                  value="tinto"
                  onChange={showTinto}
                ></input>
                <label htmlFor="tinto">Tinto</label>
              </div>
              <div>
                <input
                  id="espumante"
                  type="radio"
                  name="vinhos"
                  value="espumante"
                  onChange={showEspumante}
                ></input>
                <label htmlFor="espumante">Espumante</label>
              </div>
            </Form>
          </Paises>
        </OpcoesMenu>
      </Menu>
    </>
  );
}

const FundoTransparente = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vmax;
  height: 100vmax;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Menu = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;
  z-index: 3;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  
`;

const PrimeiraLinha = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;

  img {
    margin: auto;
  }
`;
const OpcoesMenu = styled.div`
  height: 100%;
  width: auto;
  background-color: #e1ecf4;
`;

const Paises = styled.div`
  margin: 0px 20px;

  h1 {
    font-size: 40px;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  label {
    font-size: 25px;
    margin: 5px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }
`;
