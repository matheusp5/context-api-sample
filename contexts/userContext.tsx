import {createContext, useState} from "react"

export interface User {
  email: string;
  username: string;
}
type UserContextData = {
  users: User[]
  handleRegisterForm: (data: User) => void
}

export const UserContext = createContext({} as UserContextData)
export const UserProvider = ({children}: any) => {
  const [users, setUsers] = useState<User[]>([])
  const handleRegisterForm = (data: User) => {
      // connection with server-side...
      let _tempUsers = users
      _tempUsers.push(data)
      setUsers(_tempUsers)
    }
    return (
      <UserContext.Provider value={{users, handleRegisterForm}}>
        {children}
      </UserContext.Provider>
    )
}