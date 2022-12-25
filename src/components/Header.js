import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo-branco-grk.png";

export default function Header() {
  return (
    <HeaderStyles>
      <Link to={"/"}>
        <p>a grk</p>
      </Link>
      <p>vinhos</p>
      <img src={logo} alt="logo grk" />
      <p>destilados</p>
      <p>contato</p>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.div`
  height: 200px;
  width: auto;
  background-color: #68b0d4;
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    color: #ffffff;
    font-size: 24px;
  }

  a {
    text-decoration: none;
  }
`;
