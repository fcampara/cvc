import { styled } from '../../../../theme'

export const Card = styled.li`
  list-style-type: none;
  grid-gap: 16px;
  display: flex;
  padding: 8px;
  border: 1px solid black;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.2s border-color;

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }

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

  @media (max-width: ${({ theme }) => theme.screenSize.small}) {
    flex-direction: column;
    text-align: center;

    & > img {
      width: 100%;
    }

    & > .card__broker,
    .card__information {
      align-items: center;
      text-align: center;
    }
  }
`
