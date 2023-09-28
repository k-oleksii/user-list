import { IUser } from '@src/types';
import { FC } from 'react';
import { Card as CardItem } from 'react-bootstrap';

export const Card: FC<IUser> = props => {
  const { name, username, email } = props;

  return (
    <CardItem>
      <CardItem.Body>
        <CardItem.Title>{name}</CardItem.Title>
        <CardItem.Subtitle className='mb-2 text-muted'>
          {username}
        </CardItem.Subtitle>
        <CardItem.Text>{email}</CardItem.Text>
        <CardItem.Link href='#'>Posts</CardItem.Link>
        <CardItem.Link href='#'>Albums</CardItem.Link>
      </CardItem.Body>
    </CardItem>
  );
};
