import styled from "styled-components"

export function TableHeader() {
  return (
    <>
      <Wrapper className="table-headers desktop">
        <li>FOTO</li>
        <li>NOME</li>
        <li>CARGO</li>
        <li>DATA DE ADMISSÃO</li>
        <li>TELEFONE</li>
      </Wrapper>
      
      <Wrapper className="table-headers mobile">
        <li>FOTO</li>
        <li>NOME</li>
        <li className="dot-icon"></li>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.ul`
  height: 50px;
  padding-inline: min(2rem, 2.5vw);
  border-radius: 0.5rem 0.5rem 0 0;
  background: linear-gradient(to bottom, #5A84C0, #594ED2);
  
  li {
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: 500;
    color: #fff;
    position: relative;

    &.dot-icon:after {
      content: "";
      width: 8px;
      height: 8px;
      background-color: #fff;
      border-radius: 100%;
      position: relative;
      left: 3px;
    }
  }
`