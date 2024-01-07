'use client';

import MoreStories from '../../../more-stories';
import Avatar from '../../../avatar';
import Date from '../../../date';

import { Markdown } from '@/lib/markdown';

function Body({ morePosts, post }: { morePosts: any[]; post: any }) {
  return (
    <div className="container mx-auto px-5">
      <article style={{ display: 'flex', flexDirection: 'column', maxWidth: '635px' }}>
        <h1 className="page-title">{post.title}</h1>
        <div className="hidden md:block md:mb-12">
          {post.author && <Avatar name={post.author.name} picture={post.author.picture} />}
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={post.date} />
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          {post?.coverPhoto?.url && (
            <img
              alt={`Cover Image for ${post.title}`}
              src={post.coverPhoto.url}
              width={635}
              height="auto"
              style={{ objectFit: 'contain' }}
            />
          )}
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
  );
}

Body.displayName = 'Body';

export default Body;
