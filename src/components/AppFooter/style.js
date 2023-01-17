import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  box-sizing: border-box;
  display: flex;
  padding: 48px 24px;
  border-top: 1px solid rgb(0 0 0 / 8%);

  dl {
    flex: 1;
    line-height: 1.5;

    dt {
      font-weight: 800;
      margin-bottom: 20px;
    }

    dd {
      a {
        display: inline-block;
        color: #767676;
        font-weight: 600;
        padding: 2px 0;
      }
      &:last-child::after {
        position: relative;
        right: -5px;
        content: '新推出';
        font-size: 12px;
        color: #fff;
        font-weight: 600;
        background-color: ${props => props.theme.color.second};
        padding: 2px 5px;
        border-radius: 4px;
      }
    }
  }
`
