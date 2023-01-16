import styled from 'styled-components'

export const CenterWrapper = styled.div`
  .search_bar {
    box-sizing: border-box;
    width: 300px;
    height: 48px;
    padding: 8px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.color.third};
    font-weight: 600;
    border: 1px solid #dddddd;
    border-radius: 40px;
    cursor: pointer;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);

    ${props => props.theme.mixin.shadow}

    .left {
      flex: 1;
      padding: 16px;
    }

    .right {
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        color: #fff;
        background-color: ${props => props.theme.color.first};
        border-radius: 50%;
      }
    }
  }
`
