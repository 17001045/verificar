import React from 'react';
import NavBarComponent from '../components/Navbar/NavBar.component';
import ContainerComponent from '../components/Container';
import Head from 'next/head';
import ResetCSS from "../components/ResetCSS";
import MenuNavComponent from "../components/MenuLateral/ContainerMenuLateral.component";
import styled from 'styled-components';
import MetricReparationsComponent from '../components/panels/MetricReparations.component';
import CarPerZoneComponent from '../components/panels/CarPerZone.component';
import SummaryGarageComponent from '../components/panels/SummaryGarage.component';

const Content = styled.div`
  flex: 1;
  display: block;
`;

const Box = styled.div`
  margin: 20px auto;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
`

const ItemBox = styled.div`
  flex: 1;
  min-width: 400px;
  padding: 0px 30px 30px 30px;
`;

export default () => {
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:600,900&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: ResetCSS }}></style>
    </Head>

    <NavBarComponent></NavBarComponent>

    <ContainerComponent>
      <MenuNavComponent></MenuNavComponent>

      <Content>
        <Box>

          <ItemBox>
            <MetricReparationsComponent></MetricReparationsComponent>
          </ItemBox>

          <ItemBox>
            <CarPerZoneComponent></CarPerZoneComponent>
          </ItemBox>

          <ItemBox>
            <SummaryGarageComponent></SummaryGarageComponent>
          </ItemBox>

          <ItemBox>
            <SummaryGarageComponent></SummaryGarageComponent>
          </ItemBox>

        </Box>
      </Content>

    </ContainerComponent>
  </>;
}