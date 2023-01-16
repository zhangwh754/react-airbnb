import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  color: ${props => props.theme.color.first};
  .logo {
    display: inline-block;
    cursor: pointer;
  }
`
