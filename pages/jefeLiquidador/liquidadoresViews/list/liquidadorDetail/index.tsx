import React from "react";
import styled from "styled-components";
import Nav from "../../nav";

export default () => {
    return (
        <LContainer>
            <Nav />
            <InfoContainer>

            </InfoContainer>
        </LContainer>

    )
}


const InfoContainer = styled.div`
    display:flex;
    
`;

const LContainer = styled.div`
  width:80%;
  margin: 25px auto;
  @media (max-width: 768px) {
    width:100%;
  }
`;




const info = {
    name: "juan jose araneda",
    correo:"juanjose.a@seguros.cl",
    telefono:"56 9 9740999",
    tiempoPPrp: 5,
    satisfaccion: {
        txt: "muy bueno",
        icon: ""
    },
    avatar: "",
    sCerrados: 125,
    sActuales: 50,
    pSinRevisar: 5,
    pEnReparacion: 44
}