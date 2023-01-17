import styled from 'styled-components'

export const NamesWrapper = styled.div`
  display: flex;
  align-items: center;

  .name {
    padding: 10px 20px;
    border: 1px solid #ccc;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }

    &.active {
      background-color: ${props => props.theme.color.second};
      color: #fff;
    }
  }
`
