import styled from "styled-components";

export default function Grecia({ greciaList }) {
  return (
    <>
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
      <PhotosList>
        {greciaList.map((g, i) => (
          <div key={i}>
            <EachWine>
              <img src={g.image} alt="foto da garrafa" />
              <p>{g.nome}</p>
            </EachWine>
          </div>
        ))}
      </PhotosList>
    </>
  );
}

const LinhaHorizontal = styled.div`
  height: 2px;
  width: 205px;
  background-color: #000000;
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
  width: 300px;
  margin-right: 10px;
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }

  p {
    font-size: 20px;
    color: #736357;
  }
`;
