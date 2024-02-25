import styled from "styled-components"

interface TableRowProps {
  imageSrc: string
  name: string
  job: string
  admissionDate: string
  phone: string
}

export function TableRow(props: TableRowProps) {
  const formatAdmissionDate = (date: string): string => {
    return new Date(date).toLocaleDateString()
  }

  const formatPhoneNumber = (phone: string): string => {
    return `+${phone.slice(0, 2)} (${phone.slice(2, 4)}) ${phone.slice(4, 9)}-${phone.slice(9)}`
  }

  return (
    <Wrapper>
      <td className="row-img">
        <img src={props.imageSrc} alt={props.name} />
      </td>
      <td className="row-name">{props.name}</td>
      <td className="row-job">{props.job}</td>
      <td className="row-date">{formatAdmissionDate(props.admissionDate)}</td>
      <td className="row-phone">{formatPhoneNumber(props.phone)}</td>
    </Wrapper>
  )
}

const Wrapper = styled.tr`
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.20);

  td {
    height: 50px;
    vertical-align: middle;
  }

  img {
    height: 100%;
    padding: 0.5rem 0;
    border-radius: 100%;
  }
`