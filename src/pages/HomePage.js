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
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [tel, setTel] = useState(undefined);
  const [message, setMessage] = useState(undefined);

  function sendEmail(e) {
    e.preventDefault();
  }

  return (
    <>
      <HeaderDiv>
        <Header />
      </HeaderDiv>

      <HeaderDivMobile>
        <HeaderMobileHome setShowMenuHome={setShowMenuHome} />
      </HeaderDivMobile>

      {showMenuHome ? (
        <SideBarMobileHome setShowMenuHome={setShowMenuHome} />
      ) : (
        ""
      )}

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

      <Footer>
        <div>
          <h1>Entre em contato</h1>
          <Form onSubmit={sendEmail}>
            <label htmlFor="name">nome completo</label>
            <Input
              id="name"
              type="text"
              onChage={(e) => setName(e.target.value)}
            ></Input>
            <label htmlFor="email">e-mail</label>
            <Input
              id="email"
              type="email"
              onChage={(e) => setEmail(e.target.value)}
            ></Input>
            <label htmlFor="phone">telefone</label>
            <Input
              id="phone"
              type="tel"
              onChage={(e) => setTel(e.target.value)}
            ></Input>
            <label htmlFor="message">mensagem</label>
            <InputMessage
              id="message"
              type="text"
              onChage={(e) => setMessage(e.target.value)}
            ></InputMessage>
            <Botao>enviar</Botao>
          </Form>
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
      margin: 0px 20px 30px 20px;
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

const Footer = styled.div`
  background-color: #175067;
  display: flex;
  justify-content: space-between;
  width: auto;

  div {
    margin-left: 50px;
    padding-bottom: 100px;
  }

  h1 {
    font-size: 60px;
    color: #ffffff;
    padding: 50px 0;
  }

  @media (max-width: 768px) {
    div {
      padding-bottom: 10px;
    }

    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;

const Input = styled.input`
  border-radius: 5px;
  height: 45px;
  width: 600px;
  margin: 10px 0px;
  background-color: transparent;
  padding-left: 10px;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

const InputMessage = styled.input`
  border-radius: 5px;
  height: 100px;
  width: 600px;
  margin: 10px 0px;
  background-color: transparent;
  padding-left: 10px;
  color: #ffffff;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const Botao = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 30px;
`;

const Direita = styled.div`
  color: #ffffff;
  margin-right: 50px;
  padding-top: 150px;
`;
