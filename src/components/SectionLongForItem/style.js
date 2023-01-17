import styled from 'styled-components'

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: 20%;
  padding: 3px;
  flex-shrink: 0;

  .item {
    overflow: hidden;
    border-radius: 3px;
    position: relative;
    padding: 124% 0 0;
    cursor: pointer;

    .bg {
      position: absolute;
      bottom: 0;
      top: 30%;
      left: 0;
      right: 0;
      background: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
    }

    .img {
      width: 100%;
      img {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    }

    .desc {
      position: absolute;
      bottom: 10%;
      left: 0;
      right: 0;
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      text-align: center;

      & > div {
      }
    }
  }
`
