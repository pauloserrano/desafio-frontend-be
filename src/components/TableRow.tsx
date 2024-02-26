import { useState } from "react"
import styled from "styled-components"
import Chevron from "../assets/chevron.svg"

interface TableRowProps {
  imageSrc: string
  name: string
  job: string
  admissionDate: string
  phone: string
}

export function TableRow(props: TableRowProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const formatAdmissionDate = (date: string): string => {
    return new Date(date).toLocaleDateString()
  }

  const formatPhoneNumber = (phone: string): string => {
    return `+${phone.slice(0, 2)} (${phone.slice(2, 4)}) ${phone.slice(4, 9)}-${phone.slice(9)}`
  }

  return (
    <>
      <Wrapper className="table-row desktop">
        <li className="row-img">
          <img src={props.imageSrc} alt={props.name} />
        </li>
        <li className="row-name">{props.name}</li>
        <li className="row-job">{props.job}</li>
        <li className="row-date">{formatAdmissionDate(props.admissionDate)}</li>
        <li className="row-phone">{formatPhoneNumber(props.phone)}</li>
      </Wrapper>
      
      <Wrapper open={isOpened} className="table-row mobile">
        <li className="row-img">
          <img src={props.imageSrc} alt={props.name} />
        </li>
        <li className="row-name">{props.name}</li>
        <li className="row-chevron" onClick={() => setIsOpened(prev => !prev)}>
          <img className="chevron" src={Chevron} alt={"chevron"} />
        </li>
        <li className="dropdown">
          <p>Cargo</p>
          <p>{props.job}</p>
          <p>Data de admissão</p>
          <p>{formatAdmissionDate(props.admissionDate)}</p>
          <p>Telefone</p>
          <p>{formatPhoneNumber(props.phone)}</p>
        </li>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.ul<{ open?: boolean }>`
  margin: 1px;
  padding-inline: min(2rem, 2vw);
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.20);

  li {
    display: flex;
    align-items: center;
    height: 50px;
    padding-block: 0.5rem;
  }

  .row-chevron {
    padding: 0.5rem;
    cursor: pointer;

    .chevron {
      transform: ${({ open }) => open ? "rotateX(180deg)" : "rotateX(0)"}
    }

    &:hover .chevron{
      filter: brightness(1.2);
      transition: .2s;
    }
  }

  li.dropdown {
    display: ${({ open }) => open ? "grid" : "none"};
    grid-template-columns: 1fr 1fr;
    grid-column: span 3;
    width: 100%;
    height: fit-content;
    padding: 1rem;
    margin-bottom: 1rem;

    > * {
      margin-bottom: 1rem;
      border-bottom: 1px dashed #DFDFDF;
    }

    > *:nth-child(odd) {
      font-weight: 500;
    }

    > *:nth-child(even) {
      margin-left: auto;
      font-weight: 400;
    }
  }

  .row-img img {
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }
`