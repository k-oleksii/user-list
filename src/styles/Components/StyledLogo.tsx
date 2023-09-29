import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLogo = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 24px;
  line-height: 1;
  font-weight: 600;
  color: #fff;
  text-decoration: none;

  span {
    font-size: 12px;
    color: #35be70;
  }
`;
