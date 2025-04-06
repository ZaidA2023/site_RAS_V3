import { getPosts } from '../components/posts';
import BlogList from '../components/blog';


export default function Page() {
  const posts = getPosts();
  return <BlogList posts={posts} />;
}
