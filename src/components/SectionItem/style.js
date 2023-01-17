import styled from 'styled-components'

export const ItemWrapper = styled.li`
  box-sizing: border-box;
  width: ${props => props.itemWidth};
  padding: 12px 8px;
  > div {
    line-height: 1.5em;
  }

  .cover {
    box-sizing: border-box;
    position: relative;
    padding: 66.6% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.descColor || '#767676'};
  }

  .name {
    font-size: 16px;
    color: rgb(72, 72, 72);
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical; /* 设置对齐模式 */
    -webkit-line-clamp: 2; /* 设置多行的行数 */
  }

  .price {
    font-size: 14px;
    color: rgb(72, 72, 72);
    font-weight: 400;
  }

  .rate {
    display: flex;
    align-items: center;

    .new {
      background-color: rgb(0, 132, 137);
      color: #fff;
      padding: 2px 4px;
      border-radius: 4px;
      user-select: none;
    }

    .bottom {
      font-size: ${props => props?.bottomContent?.font_size + 'px' || '10px'};
      color: ${props => props?.bottomContent?.content_color || '#484848'};
      font-weight: 600;
    }
  }
`
