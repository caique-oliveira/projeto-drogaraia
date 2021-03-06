import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        HTML5
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1f4e9;</span>
        CSS3
        </a>
      <a href="/">
        <span role="img" aria-label="contact"> &#x1f4b8;</span>
        JAVASCRIPT
        </a>
        <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        REACT
        </a>
        <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        REDUX
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;