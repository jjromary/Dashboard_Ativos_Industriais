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
  specifications: {
    maxTemp: number;
    power: number;
    rpm: number;
  }
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastUptimeAt: string;
  }
  unitId: number;
  companyId: number;
}
interface Asset {
  id: number;
  sensors: string;
  model: string;
  status: string;
  healthscore: number;
  name: string;
  image: string;
  specifications: {
    maxTemp: number;
    power: number;
    rpm: number;
  }
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastUptimeAt: string;
  }
  unitId: number;
  companyId: number;
}
interface Units {
  id: number,
  name: string,
  companyId: number;
}
interface AssetsContextType {
  assets: Assets[];
  asset: Assets | undefined | null;
  units: Units[];
  fetchAssets: (query?: string) => Promise<void>
  loadAsset: (query?: string) => Promise<void>
}

interface AssetsProviderProps {
  children: ReactNode;
}

export const AssetsContext = createContext({} as AssetsContextType)

export function AssetsProvider({ children }: AssetsProviderProps) {

  const [assets, setAssets] = useState<Assets[]>([])
  const [asset, setAsset] = useState<Asset>()
  const [units, setUnits] = useState<Units[]>([])

  const fetchAssets = async (query?: string) => {
    const response = await api.get('/assets', {
      params: {
        q: query
      }
    })

    setAssets(response.data)
  }

  const loadAsset = async (query?: string) => {
    const response = await api.get(`/assets/${query}`, {
      params: {
        q: query
      }
    })

    setAsset(response.data)
  }

  const loadUnits = async () => {
    const repsonse = await api.get('/units')

    setUnits(repsonse.data)
  }

  useEffect(() => {
    loadAsset()
    fetchAssets()
    loadUnits()
  }, [])


  return (
    <AssetsContext.Provider value={{ assets, asset, loadAsset, units, fetchAssets }}>
      {children}
    </AssetsContext.Provider>
  )
}