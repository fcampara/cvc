import { ReactNode } from 'react'
import { IUserLogged } from '../../@types/user'

export interface IUserContext extends IUserLogged {}

export interface IUserProvider {
  children: ReactNode
}
