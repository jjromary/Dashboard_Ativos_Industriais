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
    setUsers(response.data)
  }

  useEffect(() => {
    loadUsers()
    loadUnits()
  }, [])


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
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.unitId}</td>
                    <td>{user.companyId}</td>
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
