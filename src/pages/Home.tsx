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
  const [query, setQuery] = useState<string>("")

  useEffect(() => {
    const fetchEmployees = async () => {
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/employees`
      const response = await fetch(apiUrl)
      const employees: Employee[] = await response.json()

      setEmployees(employees)
    }

    fetchEmployees()

    return () => setEmployees([])
  }, [])

  const handleQuery = (input: string): void => {
    setQuery(input)
  }

  const queriedEmployees = (employees: Employee[]): Employee[] => {
    if (query.length === 0) return employees

    const cleanQuery = query.replace(/[^a-zA-Z0-9 ]/g, '')

    const filteredArray = employees.filter(employee => (
      employee.job.toLowerCase().includes(cleanQuery.toLowerCase()) ||
      employee.name.toLowerCase().includes(cleanQuery.toLowerCase()) ||
      employee.phone.toLowerCase().includes(cleanQuery.toLowerCase())
    ))

    return filteredArray
  }

  return (
    <>
    <Header />
    <Wrapper>
      <section className="top-section">
        <h1>Funcionários</h1>
        <SearchBar query={query} handleQuery={handleQuery}/>
      </section>
      <table className="table-wrapper">
        <TableHeader />
        <tbody>
          {queriedEmployees(employees).map(employee => (
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
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  .table-wrapper {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 1px;

    thead th, tbody td {
      min-width: 10%;

      &:first-of-type {
        padding-left: 2rem;
      }

      &:last-of-type {
        padding-right: 2rem;  
      }
    }

    > * {
      padding-inline: 2rem;
    }
  }
`