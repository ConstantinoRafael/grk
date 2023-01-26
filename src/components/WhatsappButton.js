import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function WhatsappButton() {
  return (
    <a href="https://wa.me/5521965469386?text=Vai+um+vinho+a%C3%AD%2C+mona%3F">
      <BotaoWhats>
        <BsWhatsapp></BsWhatsapp>
      </BotaoWhats>
    </a>
  );
}

const BotaoWhats = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background-color: #2aac00;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  position: fixed;
  right: 10px;
  bottom: 50px;
  cursor: pointer;
`;
