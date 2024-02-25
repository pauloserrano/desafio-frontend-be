import { useState } from "react"
import styled from "styled-components"
import Search from "../assets/search.svg"

export function SearchBar() {
  const [query, setQuery] = useState<string>("")

  return (
    <Wrapper>
      <input placeholder={"Pesquisar"} type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <img src={Search} alt="search" />
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  height: 50px;
  width: 290px;
  border: 1px solid #DFDFDF;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #fff;

  input {
    flex: 1;
    height: 100%;
    border: none;
    font-family: inherit;
    background-color: transparent;

    &:hover, &:focus {
      outline: none;
    }
  }
`