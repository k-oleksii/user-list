import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledCardItemTitle = styled(Card.Title)`
  color: #35be70;
`;

export const StyledCardItemText = styled(Card.Text)`
  span {
    font-size: 14px;
  }
`;

export const StyledCardLinks = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    font-size: 14px;
    color: #999;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
      color: #35be70;
    }
  }
`;
