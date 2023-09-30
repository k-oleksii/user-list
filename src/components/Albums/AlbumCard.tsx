// Core
import { FC } from 'react';
import { Card as CardItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Types
import { IAlbum } from '@src/types';

// Styles
import {
  StyledCardInner,
  StyledCardInnerTitle,
} from '@src/styles/Components/StyledCard';

export const AlbumCard: FC<IAlbum> = props => {
  const { title, id } = props;

  return (
    <StyledCardInner className='h-100'>
      <Link to={`/album/${id}`}>
        <CardItem.Body>
          <StyledCardInnerTitle>{title}</StyledCardInnerTitle>
        </CardItem.Body>
      </Link>
    </StyledCardInner>
  );
};
