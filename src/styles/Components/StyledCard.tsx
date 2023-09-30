// Core
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
    transition: color 0.3s;

    &:hover,
    &:active,
    &:focus {
      color: #35be70;
    }
  }
`;

export const StyledCardInner = styled(Card)`
  border: none;

  a {
    height: 100%;
    background-color: #f5f5f5;
    text-decoration: none;
    border-radius: 10px;
    border: 1px solid var(--bs-card-border-color);
    transition: border-color 0.3s;

    &:hover,
    &:active,
    &:focus {
      border-color: #35be70;
    }
  }
`;

export const StyledCardInnerTitle = styled(Card.Title)`
  margin-bottom: 0;
  font-size: 18px;
  color: #7e9ba0;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
