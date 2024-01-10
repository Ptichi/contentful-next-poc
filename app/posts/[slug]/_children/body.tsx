'use client';

import MoreStories from '../../../more-stories';
import Author from './author';
import { Markdown } from '@/lib/markdown';

function Body({ morePosts, post }: { morePosts: any[]; post: any }) {
  return (
    <div className="container mx-auto px-5">
      <article style={{ display: 'flex', flexDirection: 'column', maxWidth: '635px' }}>
        <div style={{ height: '84px' }} />
        <h1 className="page-title">{post.title}</h1>
        <div className="hidden md:block md:mb-12">
          {post.author && <Author date={post.date} name={post.author.name} picture={post.author.picture} />}
        </div>
        <div
          style={{
            content: ' ',
            width: '60px',
            backgroundColor: '#d5d5d5',
            height: '1px',
            margin: '30px 0 40px 0',
          }}
        />
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
      {/* <MoreStories morePosts={morePosts} /> */}
    </div>
  );
}

Body.displayName = 'Body';

export default Body;
