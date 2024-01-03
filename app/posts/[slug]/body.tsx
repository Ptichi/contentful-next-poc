'use client';
import Link from 'next/link';
import { UnifiedFooter } from '@xsite-ui/common.footer/unified-footer';
import { Top10ThemeProvider } from '@xsite-ui/top10.theme';

import MoreStories from '../../more-stories';
import Avatar from '../../avatar';
import Date from '../../date';
import CoverImage from '../../cover-image';

import { Markdown } from '@/lib/markdown';
import footerProps from './footer-props.json';

export default function Body({ morePosts, post }) {
  return (
    <Top10ThemeProvider>
      <div className="container mx-auto px-5">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
          <Link href="/" className="hover:underline">
            Blog
          </Link>
          .
        </h2>
        <article>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            {post.title}
          </h1>
          <div className="hidden md:block md:mb-12">
            {post.author && <Avatar name={post.author.name} picture={post.author.picture} />}
          </div>
          <div className="mb-8 md:mb-16 sm:mx-0">
            <CoverImage title={post.title} url={post.coverPhoto.url} />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="block md:hidden mb-6">
              {post.author && <Avatar name={post.author.name} picture={post.author.picture} />}
            </div>
            <div className="mb-6 text-lg">
              <Date dateString={post.date} />
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="prose">
              <Markdown content={post.content} />
            </div>
          </div>
        </article>
        <hr className="border-accent-2 mt-28 mb-24" />
        <div data-ni-instance-id="6453b9b1aa9266d988d6e8a1"></div>
        <MoreStories morePosts={morePosts} />
      </div>
      <UnifiedFooter unifiedFooterContent={footerProps} />
    </Top10ThemeProvider>
  );
}
