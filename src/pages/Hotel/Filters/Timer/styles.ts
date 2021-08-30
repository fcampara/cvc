import { styled } from '../../../../theme'

export const ContainerTimer = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.lighten};
  font-size: 21px;
  padding: ${({ theme }) => theme.spacing.medium};
  border-left: 4px solid ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.main};
`
