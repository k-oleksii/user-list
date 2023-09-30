import { StyledCardItemTitle } from '@src/styles/Components/StyledCard';
import { IAlbum } from '@src/types';
import { FC } from 'react';
import { Card as CardItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AlbumCard: FC<IAlbum> = props => {
  const { title, id } = props;

  return (
    <CardItem className='h-100'>
      <Link to={`/album/${id}`}>
        <CardItem.Body>
          <StyledCardItemTitle>{title}</StyledCardItemTitle>
        </CardItem.Body>
      </Link>
    </CardItem>
  );
};
