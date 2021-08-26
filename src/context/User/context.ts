import { createContext } from 'react'
import { IUserContext } from './types'

const userContext = createContext<IUserContext>({} as IUserContext)

export default userContext
