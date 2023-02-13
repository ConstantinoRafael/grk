import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import HeaderMobileHome from "../components/HeaderMobileHome";
import SideBarMobileHome from "../components/SideBarMobileHome";
import WhatsappButton from "../components/WhatsappButton";

export default function ContactPage() {
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
      <WhatsappButton></WhatsappButton>

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
