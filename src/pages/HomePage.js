import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import WhatsappButton from "../components/WhatsappButton";
import logomeio from "../assets/images/logo-meio.png";
import { Link } from "react-router-dom";
import garrafa from "../assets/images/garrafa-home.png";
import HeaderMobileHome from "../components/HeaderMobileHome";
import SideBarMobileHome from "../components/SideBarMobileHome";

export default function HomePage() {
  const [showMenuHome, setShowMenuHome] = useState(false);
  return (
    <>
      <HeaderDiv>
        <Header />
      </HeaderDiv>

      <HeaderDivMobile>
        <HeaderMobileHome setShowMenuHome={setShowMenuHome} />
      </HeaderDivMobile>

      {showMenuHome ? <SideBarMobileHome /> : ""}

      <PrimeiraSecao>
        <h1>Os vinhos são a nossa paixão.</h1>
        <p>
          Por isso, a <span>GRK</span>, importadora e distribuidora boutique,
          viaja o mundo buscando iguarias que propiciem experiências inusitadas
          aos nossos clientes.
        </p>
        <p>
          Nossa missão é oferecer uma seleção especial e diferenciada do melhor
          que encontramos ao consumidor brasileiro, com excelência nos serviços
          e foco na satisfação do nosso cliente.
        </p>
        <img src={logomeio} alt="logo meio da página" />
      </PrimeiraSecao>

      <Divisoria></Divisoria>

      <SegundaSecao>
        <div>
          <h1>Nossos Vinhos</h1>
          <p>
            Vinhos especialmente selecionados que trazem o sabor dos seus países
            e regiões, além da sua cultura e estilo de vida.
          </p>
          <BotaoDiv>
            <Link to="/vinhos">
              <button>clique aqui e conheça o mundo pelos vinhos da grk</button>
            </Link>
          </BotaoDiv>
        </div>
        <img src={garrafa} alt="garrafa" />
      </SegundaSecao>

      <WhatsappButton />
    </>
  );
}

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

const PrimeiraSecao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #17536f;
    font-size: 60px;
    margin: 100px 100px;
  }

  p {
    margin-left: 35%;
    margin-right: 10%;
    color: #736357;
    font-size: 24px;
    margin-bottom: 20px;
    line-height: 35px;
  }

  span {
    font-weight: 700;
  }

  img {
    margin: 30px 65px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
      margin: 20px;
    }

    p {
      font-size: 20px;
      margin: 10px 20px;
      line-height: 30px;
    }

    img {
      width: 250px;
    }
  }
`;

const Divisoria = styled.div`
  height: 100px;
  width: auto;
  background-color: #a37952;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const SegundaSecao = styled.div`
  height: auto;
  width: auto;
  background-color: #d2c8af;
  display: flex;
  justify-content: space-between;

  img {
    margin: 50px 150px 50px 0px;
  }

  div {
    width: 70%;
  }

  h1 {
    padding: 100px 100px;
    color: #ffffff;
    font-size: 60px;
  }

  p {
    width: 50%;
    color: #ffffff;
    font-size: 24px;
    padding: 0px 100px 200px 100px;
    line-height: 30px;
  }

  button {
    color: #ffffff;
    font-size: 24px;
    background-color: #44a3ab;
    border: none;
    margin: 0px 0px 100px 100px;
    padding: 20px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      padding: 0px;
      font-size: 30px;
      margin: 20px;
    }

    p {
      width: auto;
      padding: 0px;
      margin: 0px 20px;
    }

    img {
      display: none;
    }

    button {
      width: 250px;
      font-size: 18px;
      padding: 10px;
      margin: 20px;
    }
  }
`;

const BotaoDiv = styled.div`
  display: flex;
  justify-content: center;
`;
