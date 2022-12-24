import styled from "styled-components";

export default function Espanha({ espanhaList }) {
  return (
    <>
      <LinhaHorizontal></LinhaHorizontal>
      <h1>Espanha</h1>
      <LinhaHorizontal></LinhaHorizontal>
      <h2>
        A Espanha possui uma história milenar no cultivo de uvas e na produção
        de vinhos. É onde se encontra a maior área plantada de vinhedos do
        mundo. Há regiões muito famosas, como Rioja e Navarra, mas nos últimos
        30 anos surgiram novas áreas proeminentes para a produção de vinhos de
        alta qualidade, dos mais variados estilos e preços, que encantam os
        apreciadores. Apresentamos a Cava Trias Battle, D.O. Penedés,
        selecionada de forma especial para encantar e surpreender.
      </h2>
      <PhotosList>
        {espanhaList.map((e, i) => (
          <div key={i}>
            <EachWine>
              <img src={e.image} alt="foto da garrafa" />
              <p>{e.nome}</p>
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
