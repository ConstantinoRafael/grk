import styled from "styled-components";
//import { portugalList } from "../constants/BD";

export default function Portugal({ portugalList }) {
  return (
    <PortugalParte>
      <LinhaHorizontal></LinhaHorizontal>
      <h1>Portugal</h1>
      <LinhaHorizontal></LinhaHorizontal>
      <h2>
        Portugal é um país de longa tradição vinícola, que experimentou uma
        grande evolução na indústria nas últimas três décadas, se modernizando e
        voltando ao mercado internacional. Possui uma enorme variedade de uvas
        autóctones, o que diferencia seus vinhos daqueles produzidos em outros
        lugares do mundo. Apesar da pequena extensão do país, seu terroir varia
        muito, o que possibilita uma enorme diversidade de aromas e sabores em
        cada taça.
      </h2>
      <PhotosList>
        {portugalList.map((p, i) => (
          <div key={i}>
            <EachWine>
              <img src={p.image} alt="foto da garrafa" />
              <Subtitle>
                <p>{p.nome}</p>
              </Subtitle>
            </EachWine>
          </div>
        ))}
      </PhotosList>
    </PortugalParte>
  );
}
const PortugalParte = styled.div`
  margin-top: 20px;
`;

const LinhaHorizontal = styled.div`
  height: 2px;
  width: 205px;
  background-color: #000000;

  @media (max-width: 768px) {
  width: 135px;
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
    width:130px;
    height: 325px;

    img{
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

  @media (max-width: 768px;) {
    height: 20px;
  }
`;
