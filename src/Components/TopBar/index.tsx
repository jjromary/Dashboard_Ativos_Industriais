import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import * as z from 'zod';
import searchWhite from "../../Assets/search-white.svg";
import { AssetsContext } from "../../Context/AssetsContext";
import { Button, FormContainer, InputSearchUnit, TopBarContainer, TopBarContent, Unit } from "./styles";

const unitFormSchema = z.object({
  query: z.string(),
})

type UnitFormInput = z.infer<typeof unitFormSchema>;


export default function TopBar() {
  const { fetchAssets } = useContext(AssetsContext);


  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = useForm<UnitFormInput>({
    resolver: zodResolver(unitFormSchema),
  })

  const handleSearchUnitForm = async (data: UnitFormInput) => {
    await fetchAssets(data.query)
  }


  return (
    <TopBarContainer>

      <TopBarContent>
        <nav>
          <TopBarContent>
            <NavLink to={'/'} title="Ativos">
              <Unit>
                Ativos
              </Unit>
            </NavLink>
            <NavLink to={'/users'} title="Usuários">
              <Unit>
                Usuários
              </Unit>
            </NavLink>
          </TopBarContent>
        </nav>

      </TopBarContent>

      <FormContainer onSubmit={handleSubmit(handleSearchUnitForm)}>
        <InputSearchUnit
          type="text"
          placeholder="Buscar Ativos"
          {...register('query')}
        />
        <Button type="submit" disabled={isSubmitting}>
          Buscar
          <img src={searchWhite} width={20} height={20} />
        </Button>
      </FormContainer>
    </TopBarContainer >
  )
}
