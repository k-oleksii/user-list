import { useFetchPosts } from '@src/hooks/useFetchPosts';
import { useParams } from 'react-router-dom';

export const Posts = () => {
  const { userId } = useParams();

  const { loading, posts } = useFetchPosts(userId as string);
  console.log(posts);

  return <span>Posts</span>;
};
