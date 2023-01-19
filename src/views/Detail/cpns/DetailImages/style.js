import styled from 'styled-components'

export const ViewWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 30% 0 0;

  &:hover {
    .cover {
      opacity: 1 !important;
      &:hover {
        opacity: 0 !important;
      }
    }
  }

  .left,
  .right {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;

    display: flex;
    overflow: hidden;

    .view-item {
      position: relative;
      box-sizing: border-box;
      border: 1px solid #000;
      overflow: hidden;

      img {
        width: 100%;
        transition: transform 0.2s ease;
        object-fit: cover;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }

      .cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity .2s ease;
      }
    }

    &.left {
      left: 0;
      display: flex;
      flex-wrap: wrap;

      .view-item {
        width: 100%;
        height: 100%;
      }
    }
    &.right {
      left: 50%;
      display: flex;
      flex-wrap: wrap;

      .view-item {
        width: 50%;
        height: 50%;
      }
    }
  }
`
