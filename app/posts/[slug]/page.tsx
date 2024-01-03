import { draftMode } from 'next/headers';

import Body from './body';

import { Markdown } from '@/lib/markdown';
import { getAllPosts, getPostAndMorePosts } from '@/lib/api';

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  return <Body post={post} morePosts={morePosts} />;
}
