import styled from "styled-components";
import { SlMenu } from "react-icons/sl";

import logo from "../assets/images/logo-branco-grk.png";

export default function HeaderMobile({ setShowMenu }) {
  return (
    <>
      <HeaderStyles>
        <IconBars onClick={() => setShowMenu(true)}>
          <SlMenu />
        </IconBars>
        <img src={logo} alt="logo grk" />
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
