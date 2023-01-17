import styled from 'styled-components'

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

  .text {
    color: ${props => props.color};
    font-size: 17px;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }

  .icon {
    margin-left: 5px;
    font-size: 17px;
  }
`
