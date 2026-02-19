"use client"

import { createContext, useContext, useState } from "react"

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

  return (
    <NavContext.Provider value={{ direction, setDirection }}>
      {children}
    </NavContext.Provider>
  )
}

export function useNavDirection() {
  return useContext(NavContext)
}
