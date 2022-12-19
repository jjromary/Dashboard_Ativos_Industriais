import { MouseEventHandler, ReactNode, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AssetsContext } from "../../../../Context/AssetsContext";
import { Button, FormContainer, Title, Unit, UnitsContainer, InputSearchUnit, UnitsContent } from "./styles";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const unitFormSchema = z.object({
  query: z.string(),
})

type UnitFormInput = z.infer<typeof unitFormSchema>;


export default function Units() {
  const { units } = useContext(AssetsContext);
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
        <Title>Unidades</Title>
        <UnitsContent>
          {units.map((unit) => {
            return (
              <Unit key={unit.id}>
                {unit.name}
              </Unit>
            )
          })}
        </UnitsContent>
      </UnitsContent>
      <FormContainer onSubmit={handleSubmit(handleSearchUnitForm)}>
        <InputSearchUnit
          type="text"
          placeholder="Buscar Ativos"
          {...register('query')}
        />
        <Button type="submit" disabled={isSubmitting}>
          Visualizar
        </Button>
      </FormContainer>
    </UnitsContainer >
  )
}