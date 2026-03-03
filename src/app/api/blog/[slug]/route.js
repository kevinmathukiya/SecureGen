import { getBlogPost } from '@/lib/blog';

export async function GET(request, { params }) {
  const { slug } = params;

  const blogPost = await getBlogPost(slug);

  if (!blogPost) {
    return Response.json(
      { error: 'Blog post not found' },
      { status: 404 }
    );
  }

  return Response.json({
    metadata: blogPost.metadata,
    content: blogPost.content,
  });
}
