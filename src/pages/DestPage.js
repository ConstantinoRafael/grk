import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import HeaderMobileHome from "../components/HeaderMobileHome";
import SideBarMobileHome from "../components/SideBarMobileHome";
import WhatsappButton from "../components/WhatsappButton";
import { destilados } from "../constants/BD";

export default function DestPage() {
  const [showMenuHome, setShowMenuHome] = useState(false);

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
      <ListDest>
        {destilados.map((e) => (
          <CadaDest key={e.id}>
            <h1>{e.nome}</h1>
            <ImgText>
              <img src={e.image} alt="foto da garrafa" />
              <Texts>
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{e.desc}</h2>
                <p>
                  <span>HARMONIZAÇÃO</span>: {e.harmonizacao}
                </p>

                <p>
                  <span>NOTAS</span>: {e.notas}
                </p>
              </Texts>
            </ImgText>
          </CadaDest>
        ))}
      </ListDest>

      <WhatsappButton></WhatsappButton>
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

const ListDest = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CadaDest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-left: 40px;
    font-size: 40px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 18px;
    line-height: 20px;
    text-align: justify;
    margin-bottom: 40px;
  }

  @media (max-width: 769px) {
    h1 {
      font-size: 30px;
    }
  }
`;

const ImgText = styled.div`
  display: flex;
  width: 450px;
  margin: 20px;

  p {
    line-height: 20px;
    margin-bottom: 20px;
    text-align: justify;
  }

  span {
    font-weight: bold;
  }

  @media (max-width: 769px) {
    width: auto;
    margin: 10px;
  }
`;

const Texts = styled.div`
  margin:10px
`
