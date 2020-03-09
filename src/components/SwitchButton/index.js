import react from 'react'
import styled from 'styled-components'

export const SwitchButton = styled.button`
  border: 0;
  height: 30px;
  border-radius: 15px;
  background: ${props =>
    props.theme.colors[props.value === 'light' ? 'lightGrey' : 'primary']};
  display: flex;
  width: 50px;
  padding: 3px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: ${props => props.theme.colors.white};
    margin-left: ${props => (props.value === 'dark' ? 'calc(100% - 24px)' : 0)};
    transition: all 200ms ease;
  }
`;
export default function SwitchButton(){
    <SwitchButton type="button"
    className="switch-container"
    value={themeSelected}
    onClick={togleTheme}
  >
    {theme.title === 'light' ? (
      <span
        className="switch-circle"
        role="img"
        aria-labelledby="DarkMode"
      >
        🌛
      </span>
    ) : (
      <span
        className="switch-circle"
        role="img"
        aria-labelledby="LightMode"
      >
        🌞
      </span>
    )}
    </SwitchButton>
}