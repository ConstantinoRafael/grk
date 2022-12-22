import styled from "styled-components";
import logo from "../assets/images/logo-branco-grk.png";

export default function HomePage() {
  return (
    <Home>
      <Header>
        <p>a grk</p>
        <p>vinhos</p>
        <img src={logo} alt="logo grk" />
        <p>destilados</p>
        <p>contato</p>
      </Header>
      <Title>
        <h1>Os vinhos são a nossa paixão.</h1>
      </Title>
      <Text1>
        <p>
          Por isso, a <span>GRK</span>, importador e distribuidora boutique, viaja o mundo
          buscando iguarias que propiciem experiências inusitadas aos nossos
          clientes.
        </p>
        <p>
          Nossa missão é oferecer uma seleção especial e diferenciada do melhor
          que encontramos ao consumidor brasileiro, com excelência nos serviços
          e foco na satisfação do nosso cliente.
        </p>
      </Text1>
    </Home>
  );
}

const Home = styled.div``;

const Header = styled.div`
  height: 300px;
  width: auto;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    color: #ffffff;
    font-size: 24px;
  }
`;

const Title = styled.div`
  h1 {
    color: #19556f;
    font-size: 60px;
    margin: 60px 100px;
  }
`;

const Text1 = styled.div`
  margin-left: 40%;
  margin-right: 10%;

  p {
    color: #736357;
    font-size: 24px;
    margin-bottom: 20px;
    line-height: 30px;
  }

  span {
    font-weight: 700;
  }
`;
