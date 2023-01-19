import styled from 'styled-components'

export const ViewWrapper = styled.div`
  .image-view-content {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    z-index: 9;
    background-color: #333;

    .top {
      display: flex;
      justify-content: flex-end;
      height: 86px;

      .icon {
        margin: 16px 28px 8px;
        cursor: pointer;
      }
    }

    .view-content {
      position: relative;
      flex: 1;

      .left,
      .right {
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 75px;
        color: #fff;
        cursor: pointer;
        user-select: none;
      }

      .right {
        right: 0;
      }

      .middle {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        max-width: 105vh;

        img {
          width: 100%;
          object-fit: cover;
        }

        .fade-enter {
          transform: ${props => (props.isNext ? 'translateX(100%)' : 'translateX(-100%)')};
          opacity: 0;
        }

        .fade-enter-active {
          transform: translateX(0);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .fade-exit {
          transform: translateX(0);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .fade-exit-active {
          opacity: 0;
          transform: ${props => (props.isNext ? 'translateX(-100%)' : 'translateX(100%)')};
        }
      }
    }

    .bottom {
      transition: transform 0.3s ease;
      transform: ${props => (props.isHide ? 'translateY(30px)' : 'translateY(0)')};
      height: 123px;

      .container {
        margin: 0px auto;
        max-width: 105vh;
        height: 100%;
        .desc {
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .right {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;

            .icon {
              margin-left: 5px;
              transform: ${props => (props.isHide ? 'rotate(-90deg)' : 'rotate(90deg)')};
            }
          }
        }
        .scroll {
          overflow: hidden;
          transition: max-height 0.3s ease;
          max-height: ${props => (props.isHide ? '0px' : '80px')};

          margin-top: 10px;

          .item {
            position: relative;
            width: 15%;

            img {
              width: 100%;
            }

            .cover {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.5);
            }

            &.active {
              .cover {
                opacity: 0;
              }
            }
          }

          .item + .item {
            margin-left: 5px;
          }
        }
      }
    }
  }
`
