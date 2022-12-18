import { useContext, useEffect, useState } from "react";
import { AssetsContext } from "../../Context/AssetsContext";
import { Attribute, Button, ButtonContainer, CardAssetsContainer, ContentData, Name } from "./styles";
import search from "../../Assets/search.svg";
import * as z from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
interface CardAsstesProps {
  id: number;
  name: string;
  model: string;
  sensors: string;
  status: string;
}

const AssetFormSchema = z.object({
  id: z.string(),
})

type AssetFormInputs = z.infer<typeof AssetFormSchema>

export default function CardAssets({ name, model, sensors, id }: CardAsstesProps) {
  const { loadAsset } = useContext(AssetsContext);

  const idString = id.toString()


  const { control, handleSubmit } = useForm<AssetFormInputs>({
    resolver: zodResolver(AssetFormSchema),
    defaultValues: {
      id: ''
    }
  })

  const handleAssetForm = async (data: AssetFormInputs) => {
    await loadAsset(data.id)
    console.log("test context", data.id)
  }

  return (
    <form onSubmit={handleSubmit(handleAssetForm)}>
      <Controller
        control={control}
        name="id"
        render={({ field }) => {
          return (
            <CardAssetsContainer >
              <ButtonContainer
                onValueChange={field.onChange}
                value={field.value}
              >
                <Button
                  type="submit"
                  value={idString}
                >
                  <img src={search} />
                </Button>
              </ButtonContainer>
              <ContentData>
                <Attribute>Name: </Attribute>
                <Name>{name}</Name>
              </ContentData>
              <ContentData>
                <Attribute>Sensor: </Attribute>
                <Name>{sensors}</Name>
              </ContentData>
              <ContentData>
                <Attribute>Modelo: </Attribute>
                <Name>{model}</Name>
              </ContentData>
            </CardAssetsContainer>
          )
        }}
      />

    </form>

  )
}