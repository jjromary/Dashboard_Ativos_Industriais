import { createContext, ReactNode, useEffect, useState } from "react";

interface Assets {
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
}

interface AssetsContextType {
  assets: Assets[];
}

interface AssetsProviderProps {
  children: ReactNode;
}

export const AssetsContext = createContext({} as AssetsContextType)

export function AssetsProvider({ children }: AssetsProviderProps) {

  const [assets, setAssets] = useState<Assets[]>([])

  async function loadAssets() {
    const response = await fetch('https://my-json-server.typicode.com/tractian/fake-api/assets/3')
    const data = await response.json();

    setAssets(data)
  }

  useEffect(() => {
    loadAssets()
  }, [])


  return (
    <AssetsContext.Provider value={{ assets }}>
      {children}
    </AssetsContext.Provider>
  )
}