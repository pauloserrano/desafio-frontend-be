import styled from "styled-components"

export function TableHeader() {
  return (
    <Wrapper>
      <tr>
        <th>FOTO</th>
        <th>NOME</th>
        <th>CARGO</th>
        <th>DATA DE ADMISSÃO</th>
        <th>TELEFONE</th>
      </tr>
    </Wrapper>
  )
}

const Wrapper = styled.thead`
  height: 60px;
  
  th {
    height: 100%;
    vertical-align: middle;
    text-align: left;
    font-weight: 500;
    color: #fff;
    white-space: nowrap;
    background: linear-gradient(to bottom, #5A84C0, #594ED2);

    &:first-of-type {
      padding-left: 2rem;
      border-radius: 0.5rem 0 0 0;
    }

    &:last-of-type {
      padding-right: 2rem;
      border-radius: 0 0.5rem 0 0;
    }
  }
`