import styled from 'styled-components'

export const RoomsWrapper = styled.div`
  padding-left: 24px;
  margin: 24px 0 30px;

  .desc {
    display: flex;
    align-items: center;
    .img {
      width: 40px;
      height: 40px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .text {
      margin-left: 12px;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      color: #222;

      strong {
        font-weight: 800;
      }
    }
  }

  .list {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    .mask {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
`
