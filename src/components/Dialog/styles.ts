import { styled } from '../../theme'

export const Dialog = styled.dialog`
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
  max-width: 880px;
  background: white;
  position: fixed;
  overflow: auto;
  &::backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
  }
  &:not([open]) {
    display: none;
  }
`
