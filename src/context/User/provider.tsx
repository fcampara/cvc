import React, { useContext } from 'react'
import UserContext from './context'
import { IUserProvider } from './types'

const UserProvider: React.FC<IUserProvider> = (props: IUserProvider) => {
  const { children } = props
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}

export const useAuth = () => {
  const context = useContext(UserContext)
  return context
}

export default UserProvider
