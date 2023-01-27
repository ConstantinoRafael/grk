import styled from "styled-components";
import logomeio from "../assets/images/logo-meio.png";
import garrafa from "../assets/images/garrafa-home.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import WhatsappButton from "../components/WhatsappButton";

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Home>
      <WhatsappButton />
      <HeaderDiv>
        <Header />
      </HeaderDiv>

      <HeaderDivMobile>
        <HeaderMobile setShowMenu={setShowMenu} />
      </HeaderDivMobile>
      <Body1>
        <h1>Os vinhos são a nossa paixão.</h1>
        <p>
          Por isso, a <span>GRK</span>, importador e distribuidora boutique,
          viaja o mundo buscando iguarias que propiciem experiências inusitadas
          aos nossos clientes.
        </p>
        <p>
          Nossa missão é oferecer uma seleção especial e diferenciada do melhor
          que encontramos ao consumidor brasileiro, com excelência nos serviços
          e foco na satisfação do nosso cliente.
        </p>
        <img src={logomeio} alt="logo meio da página" />
      </Body1>
      <MidImage></MidImage>
      <Body2>
        <div>
          <h1>Nossos Vinhos</h1>
          <p>
            Vinhos especialmente selecionados que trazem o sabor dos seus países
            e regiões, além da sua cultura e estilo de vida.
          </p>
          <Link to="/vinhos">
          <button>
            clique aqui para e conheça o mundo pelos vinhos da grk
          </button>
          </Link>
        </div>
        <img src={garrafa} alt="garrafa" />
      </Body2>

      <Footer>
        <div>
          <h1>Entre em contato</h1>
          <form>
            <label htmlFor="name">nome completo</label>
            <Input id="name" type="text"></Input>
            <label htmlFor="email">e-mail</label>
            <Input id="email" type="email"></Input>
            <label htmlFor="phone">telefone</label>
            <Input id="phone" type="tel"></Input>
            <label htmlFor="message">mensagem</label>
            <InputMessage id="message" type="text"></InputMessage>
            <Botao>
              <button>enviar</button>
            </Botao>
          </form>
        </div>
        <Direita>
          <h2>GRK Products</h2>
          <p>R. Visconde de Pirajá, 303 - Sala 808</p>
          <p>Ipanema - Rio de Janeiro - RJ - Brasil</p>
          <p>CEP 22410-001</p>
          <p>Telefone: +55 21 2221-9024</p>
          <p>E-mail: contato@grkproducts.com.br</p>
         
        </Direita>
      </Footer>
    </Home>
  );
}

const Home = styled.div``;

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

const Body1 = styled.div`
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
    margin: 40px 65px;
  }
`;

const MidImage = styled.div`
  height: 100px;
  width: auto;
  background-color: #a37952;
`;

const Body2 = styled.div`
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
`;

const Footer = styled.div`
  background-color: #175067;
  display: flex;

  div {
    width: 70%;
    padding-left: 200px;
    padding-bottom: 100px;
  }

  h1 {
    font-size: 60px;
    color: #ffffff;
    padding: 50px 0;
  }

  form {
    color: #ffffff;
    font-size: 18px;
    display: flex;
    flex-direction: column;
  }

  button {
    width: 80px;
    height: 30px;
    margin-right: 18px;
  }
`;

const Input = styled.input`
  height: 45px;
  width: 600px;
  margin: 10px 0px;
  background-color: transparent;
`;

const InputMessage = styled.input`
  height: 100px;
  width: 600px;
  margin: 10px 0px;
  background-color: transparent;
`;

const Botao = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Direita = styled.div`
  color: #ffffff;
  padding-top: 150px;
`;
