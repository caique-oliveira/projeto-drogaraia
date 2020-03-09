import React from 'react';
import IconDroagaRaia from '../../imagens/drogaraia.png';
import IconDragasil from '../../imagens/drogasil.png';
import IconFarmasil from '../../imagens/farmasil.png';
import IconUnivers from '../../imagens/univers.png';
import Iconbio from '../../imagens/4bio.png';
import IconLogoFooter from '../../imagens/rd-small.png';
import { Container, Footercontent } from './styles.js';

const Footer = () => {

    return (
      <div className="Myfooter">
        <Footercontent>
          <Container>
            <div className="columns">
              <ul className="column">
                <li>
                <p>RD2017.Todos os direitos reservados</p>
                </li>
                <li>
              <div className="column2">
              <img className="img1-footer" src={IconDroagaRaia}  alt="img1-footer"/>
              </div>
              </li>
              <li>
              <div className="column3">
              <img className="img1-footer" src={IconDragasil}  alt="img2-footer"/>
              </div>
              </li>
              <li>
              <div className="column3">
              <img className="img1-footer" src={IconFarmasil}  alt="img3-footer"/>
              </div>
              </li>
              <li>
              <div className="column4">
              <img className="img1-footer" src={IconUnivers}  alt="img4-footer"/>
              </div>
              </li>
              <li>
              <div className="column5">
              <img className="img5-footer" src={Iconbio}  alt="img5-footer"/>
              </div>
              </li>
              <li>
              <div className="colin has-text-right">
              <div className="column6">
              <img className="img6-footer" src={IconLogoFooter}  alt="img6-footer"/>
              </div>
              </div>
              </li>
              </ul>
            </div>
          </Container>
       </Footercontent> 
       </div>
    );
};

export default Footer;
