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
  tr {
    height: 60px;
    padding-inline: 2rem;
    color: #fff;
    background: linear-gradient(to bottom, #5A84C0, #594ED2);
  }

  th {
    height: 100%;
    padding-inline: 2rem;
    vertical-align: middle;
    text-align: left;
  }
`