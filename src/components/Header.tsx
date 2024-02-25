import BeLogo from "../assets/be-logo.svg"
import styled from "styled-components"

export function Header() {
  return (
    <Wrapper>
      <img src={BeLogo} alt="logo" />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-inline: 2rem;
  margin-bottom: 2rem;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.20);
`