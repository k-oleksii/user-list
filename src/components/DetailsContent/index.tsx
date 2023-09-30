// Core
import { FC } from 'react';

interface IContent {
  title?: string;
  body?: string;
}

export const DetailsContent: FC<IContent> = ({ title, body }) => {
  return (
    <>
      <h1 className='mb-4 fs-3'>{title}</h1>
      {body && <p>{body}</p>}
    </>
  );
};
