import styled from "styled-components";
import logoAzul from "../assets/images/logo-azul.png";
import {
  espanhaVinhos,
  greciaVinhos,
  greciaVinhosDomaine,
  greciaVinhosZacharias,
  portugalVinhos,
} from "../constants/BD";
import { IoIosArrowDown, IoIosArrowUp, IoIosClose } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SideBarMobile({
  setGreciaListDomaine,
  setGreciaListZacharias,
  setPortugalList,
  setEspanhaList,
  setShowMenu,
}) {
  const [menuVinhos, setMenuVinhos] = useState(false);

  const navigate = useNavigate();
  function showGrecia() {
    navigate("/vinhos");
    setGreciaListDomaine(greciaVinhosDomaine);
    setGreciaListZacharias(greciaVinhosZacharias);
    setPortugalList([]);
    setEspanhaList([]);
    setShowMenu(false);
  }

  function showPortugal() {
    navigate("/vinhos");
    setGreciaListDomaine([]);
    setGreciaListZacharias([]);
    setPortugalList(portugalVinhos);
    setEspanhaList([]);
    setShowMenu(false);
  }

  function showEspanha() {
    navigate("/vinhos");
    setGreciaListDomaine([]);
    setGreciaListZacharias([]);
    setPortugalList([]);
    setEspanhaList(espanhaVinhos);
    setShowMenu(false);
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
    const portugal = portugalVinhos.filter((p) => p.tipo === "branco");
    setPortugalList(portugal);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "branco");
    setEspanhaList(espanha);
    setShowMenu(false);
  }

  function showRose() {
    navigate("/vinhos");
    const greciaDomaine = greciaVinhosDomaine.filter((g) => g.tipo === "rose");
    setGreciaListDomaine(greciaDomaine);
    const greciaZacharias = greciaVinhosZacharias.filter(
      (g) => g.tipo === "rose"
    );
    setGreciaListDomaine(greciaZacharias);
    const portugal = portugalVinhos.filter((p) => p.tipo === "rose");
    setPortugalList(portugal);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "rose");
    setEspanhaList(espanha);
    setShowMenu(false);
  }

  function showTinto() {
    navigate("/vinhos");
    const greciaDomaine = greciaVinhosDomaine.filter((g) => g.tipo === "tinto");
    setGreciaListDomaine(greciaDomaine);
    const greciaZacharias = greciaVinhosZacharias.filter(
      (g) => g.tipo === "tinto"
    );
    setGreciaListDomaine(greciaZacharias);
    const portugal = portugalVinhos.filter((p) => p.tipo === "tinto");
    setPortugalList(portugal);
    const espanha = espanhaVinhos.filter((e) => e.tipo === "tinto");
    setEspanhaList(espanha);
    setShowMenu(false);
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
    setGreciaListDomaine(greciaZacharias);
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
          <IoIosClose onClick={() => setShowMenu(false)} />
        </PrimeiraLinha>

        <OpcoesMenu>
          <Secao>
            <TituloOpcoes onClick={() => setMenuVinhos(!menuVinhos)}>
              <p>vinhos</p>
              {menuVinhos === false ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </TituloOpcoes>
            {menuVinhos === true ? (
              <Opcoes>
                <h1>País</h1>
                <Opcao onClick={() => setTimeout(showGrecia, 100)}>
                  Grécia
                </Opcao>
                <Opcao onClick={() => setTimeout(showPortugal, 100)}>
                  Portugal
                </Opcao>
                <Opcao onClick={() => setTimeout(showEspanha, 100)}>
                  Espanha
                </Opcao>

                <h1>Tipo de Vinho</h1>
                <Opcao onClick={() => setTimeout(showBranco, 100)}>
                  Branco
                </Opcao>
                <Opcao onClick={() => setTimeout(showRose, 100)}>Rosé</Opcao>
                <Opcao onClick={() => setTimeout(showTinto, 100)}>Tinto</Opcao>
                <Opcao onClick={() => setTimeout(showEspumante, 100)}>
                  Espumante
                </Opcao>
                {/* <Form>
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
                </Form> */}
              </Opcoes>
            ) : (
              ""
            )}
          </Secao>
          <Espacinho></Espacinho>
          <Secao>
            <Link to={"/destilados"}>
              <TituloOpcoes>
                <p>destilados</p>
              </TituloOpcoes>
            </Link>
          </Secao>
          <Espacinho></Espacinho>
          <Secao>
            <Link to={"/contato"}>
              <TituloOpcoes>contato</TituloOpcoes>
            </Link>
          </Secao>
        </OpcoesMenu>
      </Menu>
    </>
  );
}

const Secao = styled.div`
  a {
    text-decoration: none;
  }
`;

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
  justify-content: space-between;
  align-items: center;
  height: 80px;
  color: #17536f;
  font-size: 50px;
  margin-right: 10px;

  img {
    max-height: 60px;
    width: auto;
    margin: auto;
  }
`;
const OpcoesMenu = styled.div`
  height: 100%;
  width: auto;
`;

const TituloOpcoes = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 30px;
  background-color: #e1ecf4;
  color: #17536f;

  p {
    font-size: 30px;
    color: #17536f;
  }
`;

const Opcoes = styled.div`
  padding: 0px 20px 20px 20px;
  background-color: #f2f3f4;

  h1 {
    font-size: 25px;
    margin-bottom: 10px;
    padding-top: 20px;
  }

  label {
    font-size: 20px;
    margin: 5px;
    &:hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }
  }
`;

const Opcao = styled.div`
  color: #736357;
  font-size: 20px;
  padding: 5px 0px 5px 30px;

  &:hover {
    box-shadow: 0 0 5px rgba(33, 33, 33, 0.2);
  }
`;

const Espacinho = styled.div`
  height: 1px;
  background-color: #ffffff;
`;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;

//   div {
//     display: flex;
//   }
// `;
