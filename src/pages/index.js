import React, { Component } from "react";
import styled  from 'styled-components';
import './index.css';

//Components
import Header from '../components/header';
import Footer from '../components/footer';

import Faq from './faq';

// styles
const Container = styled.div`
  width: 100%;
`;

const Layouts = () => {
  return (
    <Container>
      <Header home />
      <p>Vai na web</p>
      <Footer />
    </Container>
  )
}

export default Layouts;