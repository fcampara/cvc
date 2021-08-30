import { styled } from '../../../../theme'

export const Card = styled.div`
  grid-gap: 16px;
  display: flex;
  padding: 8px;
  border: 1px solid black;

  & > img {
    height: 72px;
    object-fit: cover;
  }

  & > .card__information {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;

    & > h5 {
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 21px;
    }
  }

  & > .card__broker {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: right;
  }
`
