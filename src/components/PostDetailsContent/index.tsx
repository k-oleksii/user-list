import { DetailsContent } from '@components/DetailsContent';
import { useFetchPostById } from '@src/hooks/useFetchPostById';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const PostDetailsContent: FC = () => {
  const { postId } = useParams();
  const { post } = useFetchPostById(postId as string);

  if (!post) {
    return null;
  }

  return <DetailsContent title={post.title} body={post.body} />;
};
