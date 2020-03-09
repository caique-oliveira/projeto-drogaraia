import React from 'react';
import IconDroagaRaia from '../../imagens/drogaraia.png';
import IconDragasil from '../../imagens/drogasil.png';
import IconFarmasil from '../../imagens/farmasil.png';
import IconUnivers from '../../imagens/univers.png';
import Iconbio from '../../imagens/4bio.png';
import IconLogoFooter from '../../imagens/rd-small.png';
import { Container, Footercontent, Grid } from './styles.js';

const Footer = () => {

    return (
      <Container>
        <Footercontent>
          <Grid>
           
            <div class="item item-1">
            <p>RD2017.Todos os direitos reservados</p>
            </div>
            <div class="item item-2">
            <img className="img1-footer" src={IconDroagaRaia}  alt="img1-footer"/>
            <img className="img1-footer" src={IconDragasil}  alt="img2-footer"/>
            <img className="img1-footer" src={IconFarmasil}  alt="img3-footer"/>
            <img className="img1-footer" src={IconUnivers}  alt="img4-footer"/>
            <img className="img1-footer" src={Iconbio}  alt="img5-footer"/>
            </div>
            <div class="item item-3">
            <img className="img6-footer" src={IconLogoFooter}  alt="img6-footer"/>
            </div>
            
        </Grid>
        </Footercontent>
      </Container>
      
    );
};

export default Footer;
