import { IUser } from '@src/types';
import { FC } from 'react';
import { Card as CardItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Card: FC<IUser> = props => {
  const { name, username, email, id } = props;

  return (
    <CardItem>
      <CardItem.Body>
        <CardItem.Title>{name}</CardItem.Title>
        <CardItem.Subtitle className='mb-2 text-muted'>
          {username}
        </CardItem.Subtitle>
        <CardItem.Text>{email}</CardItem.Text>
        <Link to={`/posts/${props.id}`}>Posts</Link>
        <Link to={`/albums/${props.id}`}>Albums</Link>
      </CardItem.Body>
    </CardItem>
  );
};
