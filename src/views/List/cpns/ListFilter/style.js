import styled from 'styled-components'

export const FilterWrapper = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: 48px;
  border-bottom: 1px solid rgb(220, 224, 224);

  .item {
    font-size: 14px;
    line-height: 18px;
    padding: 0 5px;
    button {
      background-color: #fff;
      padding: 6px 12px;
      border: 1px solid rgb(220, 224, 224);
      border-radius: 4px;

      &.active {
        background-color: #008489;
        color: #fff;
      }
    }
  }
`
