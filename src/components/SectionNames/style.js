import styled from 'styled-components'

export const NamesWrapper = styled.div`
  .name {
    flex-shrink: 0;
    box-sizing: border-box;
    margin-right: 10px;
    padding: 14px 16px;
    min-width: 120px;
    height: 48px;
    line-height: 20px;
    font-size: 17px;
    font-weight: 800;
    white-space: nowrap;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 3px;

    &:last-child {
      margin-right: 0;
    }

    &.active {
      background-color: ${props => props.theme.color.second};
      box-shadow: 0px 7px 14px rgb(0 132 138 / 15%);
      color: #fff;
    }
  }
`
