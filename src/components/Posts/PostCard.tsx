import {
  StyledCardItemText,
  StyledCardItemTitle,
} from '@src/styles/Components/StyledCard';
import { IPost } from '@src/types';
import { FC } from 'react';
import { Card as CardItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const PostCard: FC<IPost> = props => {
  const { title, body, id, userId } = props;

  return (
    <CardItem className='h-100'>
      <Link to={`/post/${id}`}>
        <CardItem.Body>
          <StyledCardItemTitle>{title}</StyledCardItemTitle>
          <StyledCardItemText className='mb-2 text-dark-emphasis'>
            <span> {body}</span>
          </StyledCardItemText>
          {/* <StyledCardLinks>
          <Link to={`/posts/${props.id}`}>Posts</Link>
          <Link to={`/albums/${props.id}`}>Albums</Link>
        </StyledCardLinks> */}
        </CardItem.Body>
      </Link>
    </CardItem>
  );
};
