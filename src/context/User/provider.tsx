import React, { useContext, useEffect, useState } from 'react'
import { datatype, name } from 'faker'
import { IUserLogged } from '../../@types/user'
import { LOGGED_USER_SESSION_STORAGE_KEY } from '../../constants/sessionStorageKeys'
import UserContext from './context'
import { IUserContext, IUserProvider } from './types'

const UserProvider: React.FC<IUserProvider> = (props: IUserProvider) => {
  const [userLogged, setUserLogged] = useState<IUserLogged>({
    sessionId: '',
    userId: 0,
    userName: '',
  })
  const { children } = props
  const handleLogin = () => {
    const user = {
      sessionId: datatype.uuid(),
      userName: name.firstName(),
      userId: datatype.number(),
    }

    setUserLogged({
      sessionId: datatype.uuid(),
      userName: name.firstName(),
      userId: datatype.number(),
    })

    const userStringify = JSON.stringify(user)
    sessionStorage.setItem(LOGGED_USER_SESSION_STORAGE_KEY, userStringify)
  }

  useEffect(() => {
    const userLogged = sessionStorage.getItem(LOGGED_USER_SESSION_STORAGE_KEY)
    if (!userLogged) {
      return handleLogin()
    }

    try {
      const userParsed = JSON.parse(userLogged) as IUserLogged
      setUserLogged(userParsed)
    } catch (error) {
      handleLogin()
    }
  }, [])

  return (
    <UserContext.Provider value={{ ...userLogged }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = (): IUserContext => {
  const context = useContext(UserContext)
  return context
}

export default UserProvider
