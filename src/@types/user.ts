export type IUserSessionId = string
export type IUserId = number

export type IUserLogged = {
  userId: IUserId
  userName: string
  sessionId: IUserSessionId
}
