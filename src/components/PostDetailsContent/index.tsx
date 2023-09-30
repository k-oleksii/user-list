// Core
import { FC } from 'react';
import { useParams } from 'react-router-dom';

// Components
import { DetailsContent } from '@components/DetailsContent';

// Hooks
import { useFetchPostById } from '@src/hooks/useFetchPostById';

// Styles
import { StyledLoading } from '@src/styles/ui/StyledLoading';

export const PostDetailsContent: FC = () => {
  const { postId } = useParams();
  const { post, loading } = useFetchPostById(postId as string);

  return (
    <>
      {loading ? (
        <StyledLoading>
          <span
            className='spinner-border spinner-border-sm'
            aria-hidden='true'
          ></span>
          <span role='status'>Loading...</span>
        </StyledLoading>
      ) : (
        <DetailsContent title={post?.title} body={post?.body} />
      )}
    </>
  );
};
