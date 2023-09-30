// Core
import { FC } from 'react';
import { Card as CardItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Types
import { IUser } from '@src/types';

// Styles
import {
  StyledCardItemText,
  StyledCardItemTitle,
  StyledCardLinks,
} from '@src/styles/Components/StyledCard';

export const Card: FC<IUser> = props => {
  const { name, username, email, id } = props;

  return (
    <CardItem className='h-100'>
      <CardItem.Body>
        <StyledCardItemTitle>{name}</StyledCardItemTitle>
        <StyledCardItemText className='mb-2 text-dark-emphasis'>
          <span className='small '>username: </span>
          <span className='fw-medium'> {username}</span>
        </StyledCardItemText>
        <StyledCardItemText className='text-muted text-dark-emphasis'>
          <span className='small'>email: </span>
          <span className='fw-medium'>{email}</span>
        </StyledCardItemText>
        <StyledCardLinks>
          <Link to={`/posts/${id}`}>Posts</Link>
          <Link to={`/albums/${id}`}>Albums</Link>
        </StyledCardLinks>
      </CardItem.Body>
    </CardItem>
  );
};
