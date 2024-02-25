import styled from "styled-components"

interface TableRowProps {
  imageSrc: string
  name: string
  job: string
  admissionDate: string
  phone: string
}

export function TableRow(props: TableRowProps) {
  return (
    <Wrapper>
      <td className="row-img">
        <img src={props.imageSrc} alt={props.name} />
      </td>
      <td className="row-name">{props.name}</td>
      <td className="row-job">{props.job}</td>
      <td className="row-date">{props.admissionDate}</td>
      <td className="row-phone">{props.phone}</td>
    </Wrapper>
  )
}

const Wrapper = styled.tr`

  td {
    padding: 1rem 2rem;
    vertical-align: middle;
  }

  img {
    height: 34px;
    border-radius: 100%;
  }
`