import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../Lib/axios";

interface Assets {
  id: number;
  sensors: string;
  model: string;
  status: string;
  healthscore: number;
  name: string;
  image: string;
  maxTemp: number;
  totalCollectsUptime: number;
  totalUptime: number;
  lastUptimeAt: Date;
  companyId: number;
  unitId: number;
}
interface Units {
  id: number,
  name: string,
  companyId: number;
}
interface AssetsContextType {
  assets: Assets[];
  units: Units[];
  fetchAssets: (query?: string) => Promise<void>
}

interface AssetsProviderProps {
  children: ReactNode;
}

export const AssetsContext = createContext({} as AssetsContextType)

export function AssetsProvider({ children }: AssetsProviderProps) {

  const [assets, setAssets] = useState<Assets[]>([])
  const [units, setUnits] = useState<Units[]>([])

  const fetchAssets = async (query?: string) => {
    const response = await api.get('/assets', {
      params: {
        q: query
      }
    })



    setAssets(response.data)
  }

  const loadUnits = async () => {
    const repsonse = await api.get('/units')

    setUnits(repsonse.data)
  }
  useEffect(() => {
    fetchAssets()
    loadUnits()
  }, [])


  return (
    <AssetsContext.Provider value={{ assets, units, fetchAssets }}>
      {children}
    </AssetsContext.Provider>
  )
}