import { getBlogPosts } from '@/lib/blog';

export async function GET() {
  const posts = await getBlogPosts();

  return Response.json({
    posts,
  });
}
