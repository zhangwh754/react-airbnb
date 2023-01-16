import styled from 'styled-components'

export const RightWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;

  .btns {
    display: flex;
    align-items: center;
    font-weight: 600;
    .btn {
      position: relative;
      line-height: 16px;
      padding: 13px 12px;
      color: ${props => props.theme.color.third};

      &:hover {
        border-radius: 22px;
        background-color: #f7f7f7;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        top: 0;
        left: -3px;
        right: -3px;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 8px;
    padding: 5px 5px 5px 12px;
    border: 1px solid #dddddd;
    border-radius: 22px;

    ${props => props.theme.mixin.shadow}

    .icon {
      width: 16px;
      height: 16px;
      color: #222222;
    }

    .icon:nth-child(2) {
      width: 30px;
      height: 30px;
      margin-left: 12px;
      color: #717171;
    }
  }

  .panel {
    box-sizing: border-box;
    position: absolute;
    right: 0;
    top: 60px;
    margin-top: -8px;
    padding: 8px 0;
    width: 240px;
    height: 243px;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgb(0 0 0 / 12%);
    background-color: #fff;
    .top .item,
    .bottom .item {
      cursor: pointer;
      padding: 12px 16px;
      line-height: 18px;

      &:hover {
        background-color: #f5f5f5;
      }
    }

    .top {
      padding-bottom: 8px;
      border-bottom: 1px solid #dddddd;
    }

    .bottom {
      padding-top: 8px;
    }
  }
`
