import { createContext, useContext, ReactElement, useState, useEffect, ChangeEvent, MouseEvent } from 'react'

export interface OverlayProviderValues {
  isOpen: boolean
  handleClose: () => void
  handleOpen: (event: MouseEvent<HTMLAnchorElement>) => void
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const defaultValues = {
  isOpen: false,
  handleClose: () => null,
  handleOpen: () => null,
  handleChange: () => null,
}

const OverlayContext = createContext<OverlayProviderValues>(defaultValues)
export const useOverlay = (): OverlayProviderValues => useContext(OverlayContext)

export interface DefaultModeProps {}

interface OverlayProviderProps extends DefaultModeProps {
  children: React.ReactNode
}

export const OverlayProvider = ({ children }: OverlayProviderProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setIsOpen(true)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  useEffect(() => {
    const escFunction = (event: globalThis.KeyboardEvent) => {
      if (event.key === `Escape`) {
        handleClose()
      }
    }
    window.addEventListener(`keydown`, escFunction, false)
    return function cleanup() {
      window.removeEventListener(`keydown`, escFunction, false)
    }
  }, [])

  return <OverlayContext.Provider value={{ isOpen, handleOpen, handleClose, handleChange }}>{children}</OverlayContext.Provider>
}