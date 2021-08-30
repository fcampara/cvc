import { IUserId, IUserSessionId } from './user'

export type OrderStore = {
  sessionId: IUserSessionId
  userId: IUserId
  roomId: number
}
