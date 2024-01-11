import ContentfulImage from '@/lib/contentful-image';

export default function Avatar({ name, picture }: { name: string; picture: any }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div>
        <ContentfulImage
          alt={name}
          className="object-cover h-full rounded-full"
          height={48}
          width={48}
          src={picture.url}
          style={{ borderRadius: '50%' }}
        />
      </div>
      <div style={{ color: '#797979' }}>{name}</div>
    </div>
  );
}
