import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
//import { Container } from './styles';

let backgroundColor = '#000000'
const Container = styled.div`
background:#efefef
 width: 100%;

 display: flex;
 flex-direction: column;
 align-items: center;
`;


export default function Main() {
  const [theme,setTheme] = useState(true);

 
  const toggleTheme =() =>{
    setTheme(!theme)
    console.log(backgroundColor)
  }
  useEffect(()=>{
   theme==true?document.querySelector('body').style.backgroundColor ="#efefef":(
   document.querySelector('body').style.backgroundColor = "#000000"
   )

  },[theme])
  return (
    <Container>
      <Header />
      <Menu />
      <Body  toggleTheme={toggleTheme}   />
      <Footer />
    </Container>
  );
}

