import { Link } from "react-router-dom";
import styled from "styled-components";
//import { portugalList } from "../constants/BD";

export default function Portugal({
  portugalListCondado,
  portugalListHedade,
  portugalListVale,
}) {
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
      

      {portugalListCondado.length > 0 ? (
        <Produtora>
          <h3>Condado Portucalense</h3>
        </Produtora>
      ) : (
        ""
      )}

      <PhotosList>
        {portugalListCondado.map((g, i) => (
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

      {portugalListHedade.length > 0 ? (
        <Produtora>
          <h3>Hedade de Medeiros</h3>
        </Produtora>
      ) : (
        ""
      )}

      <PhotosList>
        {portugalListHedade.map((g, i) => (
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

      {portugalListVale.length > 0 ? (
        <Produtora>
          <h3>Vale da Veiga</h3>
        </Produtora>
      ) : (
        ""
      )}

      <PhotosList>
        {portugalListVale.map((g, i) => (
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
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    text-decoration: none;
  }
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
  justify-content: center;
  width: auto;
  height: 40px;
  background-color: #44a3ab;

  h3 {
    color: #ffffff;
    font-size: 20px;
    margin-left: 20px;
  }
`;
