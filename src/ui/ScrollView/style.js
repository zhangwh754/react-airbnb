import styled from 'styled-components'

export const ViewWrapper = styled.div`
  width: 100%;
  position: relative;

  .scroll-container {
    width: 100%;
    overflow: hidden;
  }

  .scroll-content {
    display: flex;
    align-items: center;
    transition: transform 0.1s ease;
  }

  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background-color: #fff;
    border: 1px solid #ccc;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    user-select: none;
    cursor: pointer;
  }

  .left {
    left: 0;
    transform: translate(-50%, -50%);
  }
  .right {
    right: 0;
    transform: translate(50%, -50%);
  }
`
