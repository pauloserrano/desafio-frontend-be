import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header, SearchBar, TableHeader, TableRow } from "../components";

interface Employee {
  id: number
  image: string
  name: string
  job: string
  admission_date: string
  phone: string
}

export default function Home() {
  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch("http://localhost:3000/employees")
      const employees: Employee[] = await response.json()

      setEmployees(employees)
      console.log(employees)
    }

    fetchEmployees()
  }, [])

  return (
    <>
    <Header />
    <Wrapper>
      <section className="top-section">
        <h1>Funcionários</h1>
        <SearchBar />
      </section>
      <table className="table-wrapper">
        <TableHeader />
        <tbody>
          {employees.map(employee => (
            <TableRow 
              key={employee.id}
              name={employee.name}
              imageSrc={employee.image}
              admissionDate={employee.admission_date}
              job={employee.job}
              phone={employee.phone}
            />
          ))}
        </tbody>
      </table>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  width: 100%;
  padding-inline: 2rem;

  .top-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  .table-wrapper {
    width: 100%;

    > * {
      padding-inline: 2rem;
    }
  }
`