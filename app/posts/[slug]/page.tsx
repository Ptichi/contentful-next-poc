import { draftMode } from 'next/headers';

import { ArticleHead } from './_children/head';
import Body from './_children/body';

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

  return (
    <>
      <ArticleHead />
      <Body post={post} morePosts={morePosts} />
    </>
  );
}
