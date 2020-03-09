import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Menu />
      <Body />
      <Footer />>
    </Container>
  );
}
