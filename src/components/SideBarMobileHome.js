import styled from "styled-components";
import logoAzul from "../assets/images/logo-azul.png";
import { espanhaVinhos, greciaVinhos, portugalVinhos } from "../constants/BD";
import { IoIosArrowDown, IoIosArrowUp, IoIosClose } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideBarMobileHome({ setShowMenuHome }) {
  const navigate = useNavigate();

  return (
    <>
      <FundoTransparente
        onClick={() => setShowMenuHome(false)}
      ></FundoTransparente>
      <Menu>
        <PrimeiraLinha>
          <img src={logoAzul} alt="logo grk" />
          <IoIosClose onClick={() => setShowMenuHome(false)} />
        </PrimeiraLinha>
        <OpcoesMenu>
          <Secao>
            <TituloOpcoes onClick={() => navigate("/vinhos")}>
              <p>vinhos</p>
            </TituloOpcoes>
          </Secao>
          <Espacinho></Espacinho>
          <Secao>
            <TituloOpcoes onClick={() => navigate("/destilados")}>
              <p>destilados</p>
            </TituloOpcoes>
          </Secao>
          <Espacinho></Espacinho>
          <Secao>
            <TituloOpcoes onClick={() => navigate("/contato")}>
              <p>contato</p>
            </TituloOpcoes>
          </Secao>
        </OpcoesMenu>
      </Menu>
    </>
  );
}

const Secao = styled.div``;

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
`

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;

//   div {
//     display: flex;
//   }
// `;
