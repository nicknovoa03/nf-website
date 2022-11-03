import Container from 'components/Container';
import { Main } from 'layouts';
import React from 'react';
import CTA from './components/CTA';
import CTA2 from './components/CTA2';
import Hero from './components/Hero';
import Info from './components/Info';
import LogoGrid from './components/LogoGrid';

const Reviews = () => {
  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Info />
      </Container>
      <Container>
        <CTA />
      </Container>
      <Container>
        <LogoGrid />
      </Container>
      <Container>
        <CTA2 />
      </Container>
    </Main>
  );
};
export default Reviews;
