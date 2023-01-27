import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Grecia({
  greciaList,
  greciaListDomaine,
  greciaListZacharias,
}) {
  return (
    <GreciaParte>
      <LinhaHorizontal></LinhaHorizontal>
      <h1>Grécia</h1>
      <LinhaHorizontal></LinhaHorizontal>
      <h2>
        Apesar de pouco conhecida no Brasil, a Grécia produz vinhos há mais de
        quatro milênios. Nos últimos 40 anos, as técnicas e métodos de
        vinificação sofreram notáveis melhorias e investimentos. Hoje seus
        vinhos são exuberantes, desde aqueles produzidos com uvas autóctones,
        como a Assyrtiko e a Agiorgitiko, até os baseados nas uvas de origem
        francesa, como a Cabernet Sauvignon e a Syrah, que se adaptaram muito
        bem aos diveros terroirs gregos.
      </h2>
      <Produtora>
        <h3>Domaine Costa Lazaridi</h3>
      </Produtora>
      <PhotosList>
        {greciaListDomaine.map((g, i) => (
          <div key={i}>
            <Link to={`/vinhos/${g.url}`}>
              <EachWine>
                <img src={g.image} alt="foto da garrafa" />
                <Subtitle>
                  <p>{g.nome}</p>
                </Subtitle>
              </EachWine>
            </Link>
          </div>
        ))}
      </PhotosList>
      <Produtora>
        <h3>Zacharias</h3>
      </Produtora>
      <PhotosList>
        {greciaListZacharias.map((g, i) => (
          <div key={i}>
            <Link to={`/${g.url}`}>
              <EachWine>
                <img src={g.image} alt="foto da garrafa" />
                <Subtitle>
                  <p>{g.nome}</p>
                </Subtitle>
              </EachWine>
            </Link>
          </div>
        ))}
      </PhotosList>
    </GreciaParte>
  );
}
const GreciaParte = styled.div`
  margin-top: 20px;
`;

const LinhaHorizontal = styled.div`
  height: 2px;
  width: 160px;
  background-color: #000000;

  @media (max-width: 768px) {
    width: 102px;
  }
`;

const PhotosList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const EachWine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 500px;
  margin-right: 10px;
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }

  p {
    font-size: 15px;
    color: #736357;
  }

  img {
    height: 470px;
  }
  

  @media (max-width: 768px) {
    width: 130px;
    height: 325px;

    img {
      height: 305px;
    }

    p {
      font-size: 10px;
    }
  }
`;

const Subtitle = styled.div`
  height: 30px;
  margin: auto;
  text-align: center;

  @media (max-width: 768px) {
    height: 20px;
  }
`;

const Produtora = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 40px;
  background-color: #44a3ab;

  h3 {
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
  }
`;
