import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../Lib/axios";

interface Assets {
  id: number;
  sensors: string;
  model: string;
  status: 'inAlert' | 'inOperation' | "inDowntime";
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
  status: 'inAlert' | 'inOperation' | "inDowntime";
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

interface AssetsContextType {
  assets: Assets[];
  asset: Asset | undefined | null;
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



  useEffect(() => {
    fetchAssets()
  }, [])

  return (
    <AssetsContext.Provider value={{ assets, asset, loadAsset, fetchAssets }}>
      {children}
    </AssetsContext.Provider>
  )
}
