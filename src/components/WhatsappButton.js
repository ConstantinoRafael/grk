import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function WhatsappButton() {
  return (
    <a href="https://api.whatsapp.com/send?phone=5521965469386&text=Gostaria%20de%20algumas%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20grk.">
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
