// Core
import { FC } from 'react';
import { Card as CardItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Types
import { IPost } from '@src/types';

// Styles
import {
  StyledCardInner,
  StyledCardInnerTitle,
  StyledCardItemText,
} from '@src/styles/Components/StyledCard';

export const PostCard: FC<IPost> = props => {
  const { title, body, id } = props;

  return (
    <StyledCardInner className='h-100'>
      <Link to={`/post/${id}`}>
        <CardItem.Body>
          <StyledCardInnerTitle>{title}</StyledCardInnerTitle>
          <StyledCardItemText className='mb-2 text-dark-emphasis'>
            <span> {body}</span>
          </StyledCardItemText>
        </CardItem.Body>
      </Link>
    </StyledCardInner>
  );
};
