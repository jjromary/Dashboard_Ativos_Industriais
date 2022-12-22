import { useEffect, useState } from "react";
import CardDashboard from "../../Components/CardDashboard";
import { api } from "../../Lib/axios";
import { UserContent, UsersContainer } from "./styles";

interface UsersProps {
  id: number;
  name: string;
  email: string;
  unitId: number;
  companyId: number;
}

interface UnitsProps {
  id: number,
  name: string,
  companyId: number;
}

interface CompanyProps {
  id: number;
  name: string;
}

export default function Users() {
  const [users, setUsers] = useState<UsersProps[]>([])
  const [units, setUnits] = useState<UnitsProps[]>([])
  const [company, setCompanny] = useState<CompanyProps[]>([])

  const loadUsers = async () => {
    const response = await api.get('/users')
    setUsers(response.data)
  }

  const loadUnits = async () => {
    const response = await api.get('/units')
    setUnits(response.data)
  }

  const loadCompany = async () => {
    const response = await api.get('/companies')
    setCompanny(response.data)
  }

  useEffect(() => {
    loadUsers()
    loadUnits()
    loadCompany()
  }, [])

  const unitsWithId = units.map(unit => ({ id: unit.id, name: unit.name }));
  const companiesWithId = company.map(comp => ({ id: comp.id, name: comp.name }));

  console.log("unitsWithId", unitsWithId)

  return (
    <UsersContainer>

      <CardDashboard width="100%" height="100%" title="Usuários" fontSize="1.5rem">
        <UserContent>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Unidade</th>
                <th>Empresa</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                const unit = unitsWithId.find(unit => unit.id === user.unitId);
                const company = companiesWithId.find(comp => comp.id === user.companyId);
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{unit?.name}</td>
                    <td>{company?.name}</td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </UserContent>
      </CardDashboard>
    </UsersContainer>
  )
}
