import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: relative;
  display: inline-block;
  padding-right: 30px;
  color: #222;
  cursor: pointer;

  .title {
    font-size: 22px;
    font-weight: 800;
    line-height: 26px;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }

  &:hover::after {
    display: block;
  }

  &::after {
    display: none;
    content: '';
    box-sizing: border-box;
    position: absolute;
    right: 0;
    top: 50%;
    width: 8px;
    height: 8px;
    border-right: 1px solid #222;
    border-bottom: 1px solid #222;
    transform: rotate(-45deg) translate(10px, 0);
  }
`
