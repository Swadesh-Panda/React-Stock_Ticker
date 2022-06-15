import React, { createContext } from 'react'
import useLocalStorage from "../hooks/useLocalStorage";

const ChatsContext = createContext()

const ChatsProvider = ({children}) => {
    const [chats, setChats] = useLocalStorage('chats', [])

  return (
    <ChatsContext.Provider value={{ chats, setChats }}>
        {children}
    </ChatsContext.Provider>
  )
}

export { ChatsContext, ChatsProvider }