// eslint-disable-next-line  import/no-named-as-default
import styled from 'styled-components';

export const CustomerWrap = styled.div`
  padding: 5px 12px;
  font-size: 12px;
  span {
    opacity: 0.6;
  }
  div {
    font-weight: 500;
  }
`;

export const LineWrap = styled.div`
  display: flex;
  width: 100%;
  margin: 0 10px;
  div {
    padding: 2px;
    background-color: #c9f0d7;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-right: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 30px;
    height: 30px;
  }
  .copy-icon {
    justify-self: flex-end;
    .anticon {
      font-size: 15px;
    }
  }
`;
