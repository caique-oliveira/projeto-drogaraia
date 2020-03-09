import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './pages/Main';
import GlobalStyles from './styles/global';
import { theme } from './theme';
import Burger from './components/Burger';
import Menu from  './components/Menu'


function App() {
  const [open, setOpen] = useState(false);
 
  return (
    <>
      <GlobalStyles />
      <div>
      <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          </div>
        <Main  />
    </>
  );
}

export default App;
