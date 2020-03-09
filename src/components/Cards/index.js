import React, { useState } from 'react';
import Popup from './Popup.js';
import desktop from '../../imagens/desktop.png';
import tablet from '../../imagens/tablet.png';
import mobile from '../../imagens/mobile.png';

import { Container, CardContainer, Card1, Card2, Card3 } from './styles';

export default function Cards({ toggleTheme }) {
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
    }
  }

  const [showPopup, setShowPopup] = useState('false');

  function handlePopup() {
    setShowPopup('true');
  }
  function hidePopup() {
    setShowPopup('false');
  }
  function handleClick(e) {
    const { id } = e.target;

    if (id === 'btn2') {
      document.getElementById('showmore-card2').classList.toggle('hide');
    }
  }
  return (
    <Container>
      <CardContainer style={{ background: '#f69383' }}>
        <section>
          <img src={desktop} alt="" />
          <h2>Site Responsivel Destaktop</h2>
        </section>
        <div>
        <p>Quando pressionado o botão <strong>Leia mais</strong> o  restante da informação deve aparecer em scroll down
          <span id="dots">...</span>
          <span id="more" style={{ display: 'none' }} >Lorem ipsum erisque enim ligula venenatis dolor. Maecen erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices 
          nec congue eget, auctor </span>
          </p>
          <br/>
             <button id="btn1"  onClick={myFunction} style={{ background: '#FE9481' }}>Leia Mais</button>
        </div>
      </CardContainer>

      <CardContainer style={{ background: '#fcd992', height: '32em' }}>
        <section>
          <img src={tablet} alt="" />
          <h2>Site Responsivo Table</h2>
        </section>
        <div>
                <p>
                  Quando pressionado o botão <strong>Leia mais...</strong>{' '}
                  &nbsp;o restante da informação deverá aparecer complata em um popup de tela.
                 
                </p>
              <button id="btn2"  onClick={handlePopup} style={{ background: '#FCDA92' }}>Leia Mais</button>
        </div>
      </CardContainer>
     
      <CardContainer style={{ background: '#9b8cb9' }}>
        <section>
          <img src={mobile} alt="" />
          <h2>Site Responsivo Mobile</h2>
        </section>
        <div>
        <p>
                  Quando pressionado o botão <strong>Aterar tema</strong>{' '}
                  &nbsp;modifique o tema do site para blackfriday ao seu gosto.
                 
                </p>
          <button style={{ background: '#9b8cb9' }} id='btn3' onClick={toggleTheme}>Leia Mais</button>
        </div>
      </CardContainer>
      <Popup
          show={showPopup}
          onChange={hidePopup} 
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
    </Container>
  );
}
