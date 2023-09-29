import {
  StyledCardItemText,
  StyledCardItemTitle,
} from '@src/styles/Components/StyledCard';
import { IPost } from '@src/types';
import { FC } from 'react';
import { Card as CardItem } from 'react-bootstrap';

export const PostCard: FC<IPost> = props => {
  const { title, body } = props;

  return (
    <CardItem className='h-100'>
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
    </CardItem>
  );
};
