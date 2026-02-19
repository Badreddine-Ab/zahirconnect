"use client"

import { createContext, useContext, useState, useMemo } from "react"

type Direction = "left" | "right"

interface NavContextType {
  direction: Direction
  setDirection: (dir: Direction) => void
}

const NavContext = createContext<NavContextType>({
  direction: "right",
  setDirection: () => {},
})

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState<Direction>("right")
  const value = useMemo(() => ({ direction, setDirection }), [direction])

  return (
    <NavContext.Provider value={value}>
      {children}
    </NavContext.Provider>
  )
}

export function useNavDirection() {
  return useContext(NavContext)
}
