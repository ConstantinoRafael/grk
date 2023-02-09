import styled from "styled-components";
import { SlMenu } from "react-icons/sl";

import logo from "../assets/images/logo-branco-grk.png";
import { useNavigate } from "react-router-dom";

export default function HeaderMobileHome({ setShowMenuHome }) {
  const navigate = useNavigate();

  return (
    <>
      <HeaderStyles>
        <IconBars onClick={() => setShowMenuHome(true)}>
          <SlMenu />
        </IconBars>
        <img src={logo} onClick={() => navigate("/")} alt="logo grk" />
      </HeaderStyles>
    </>
  );
}

const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: auto;
  background-color: #68b0d4;

  img {
    max-height: 100px;
    width: auto;
    margin: auto;
  }
`;

const IconBars = styled.div`
  color: #ffffff;
  font-size: 40px;
  margin-left: 20px;
`;


