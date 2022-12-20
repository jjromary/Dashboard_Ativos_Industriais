import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import * as z from 'zod';
import searchWhite from "../../Assets/search-White.svg";
import { AssetsContext } from "../../Context/AssetsContext";
import { Button, FormContainer, InputSearchUnit, Unit, UnitsContainer, UnitsContent } from "./styles";

const unitFormSchema = z.object({
  query: z.string(),
})

type UnitFormInput = z.infer<typeof unitFormSchema>;


export default function Units() {
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
    <UnitsContainer>

      <UnitsContent>
        <nav>
          <UnitsContent>
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
          </UnitsContent>
        </nav>

      </UnitsContent>

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
    </UnitsContainer >
  )
}
