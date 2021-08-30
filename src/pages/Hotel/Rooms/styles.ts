import { styled } from '../../../theme'

export const ContainerRoom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const ListRoom = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 16px;
  grid-gap: 32px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.screenSize.small}) {
    width: -webkit-fill-available;
  }
`

export const CardRoom = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 420px;

  @media (max-width: ${({ theme }) => theme.screenSize.small}) {
    flex-direction: column;
    width: auto;
  }

  .room__action {
    display: flex;
    flex-direction: column;
    text-align: center;
    grid-gap: 8px;

    & > span {
      font-weight: 900;
      letter-spacing: 1px;
    }
  }

  .room_information {
    text-align: right;

    & > h5 {
      margin: 8px 0;
      font-size: 14px;
      letter-spacing: 1px;
    }

    & > small {
      font-size: 11px;
    }
  }
`
