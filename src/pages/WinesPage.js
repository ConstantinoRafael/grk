import styled from "styled-components";
import logo from "../assets/images/logo-branco-grk.png";
import { products } from "../constants/BD";

export default function WinesPage() {
  const WinePortugal = products.filter((p) => p.pais === "Portugal");
  const WineGrecia = products.filter((p) => p.pais === "Grécia");

  return (
    <Wines>
      <Header>
        <p>a grk</p>
        <p>vinhos</p>
        <img src={logo} alt="logo grk" />
        <p>destilados</p>
        <p>contato</p>
      </Header>

      <WineList>
        <SideBar></SideBar>
        <PaisList>
          <PaisWines>
            <LinhaHorizontal></LinhaHorizontal>
            <h1>Grécia</h1>
            <LinhaHorizontal></LinhaHorizontal>
            <p>
              Apesar de pouco conhecida no Brasil, a Grécia produz vinhos há
              mais de quatro milênios. Nos últimos 40 anos, as técnicas e
              métodos de vinificação sofreram notáveis melhorias e
              investimentos. Hoje seus vinhos são exuberantes, desde aqueles
              produzidos com uvas autóctones, como a Assyrtiko e a Agiorgitiko,
              até os baseados nas uvas de origem francesa, como a Cabernet
              Sauvignon e a Syrah, que se adaptaram muito bem aos diveros
              terroirs gregos.
            </p>
            <WineType>
              {WineGrecia.map((w) => (
                <EachWine>
                  <img key={w.id} src={w.image} alt="foto da garrafa" />
                  <p>{w.nome}</p>
                </EachWine>
              ))}
            </WineType>
          </PaisWines>
          <PaisWines>
            <LinhaHorizontal></LinhaHorizontal>
            <h1>Portugal</h1>
            <LinhaHorizontal></LinhaHorizontal>
            <p>
              Portugal é um país de longa tradição vinícola, que experimentou
              uma grande evolução na indústria nas últimas três décadas, se
              modernizando e voltando ao mercado internacional. Possui uma
              enorme variedade de uvas autóctones, o que diferencia seus vinhos
              daqueles produzidos em outros lugares do mundo. Apesar da pequena
              extensão do país, seu terroir varia muito, o que possibilita uma
              enorme diversidade de aromas e sabores em cada taça.
            </p>
            <WineType>
              {WinePortugal.map((w) => (
                <EachWine>
                  <img key={w.id} src={w.image} alt="foto da garrafa" />
                  <p>{w.nome}</p>
                </EachWine>
              ))}
            </WineType>
          </PaisWines>
        </PaisList>
      </WineList>
    </Wines>
  );
}

const Wines = styled.div``;

const Header = styled.div`
  height: 300px;
  width: auto;
  background-color: #68b0d4;
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    color: #ffffff;
    font-size: 24px;
  }
`;

const WineList = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  height: auto;
  width: 800px;
  background-color: silver;
`;

const PaisList = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaisWines = styled.div`
  margin: 20px 20px;

  h1 {
    font-size: 60px;
    margin: 5px 0px;
  }

  p {
    margin-top: 20px;
    color: #736357;
    font-size: 24px;
    margin-bottom: 20px;
    line-height: 35px;
  }
`;

const LinhaHorizontal = styled.div`
  height: 2px;
  width: 205px;
  background-color: #000000;
`;

const WineType = styled.div`
  display: flex;
`;

const EachWine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-right: 10px;
  &:hover {
  box-shadow: 0 0 11px rgba(33,33,33,.2); 
}

  p {
    font-size: 20px;
  }
`;
