import { format } from 'date-fns';
import ContentfulImage from '@/lib/contentful-image';

export default function Author({ date, name, picture }: { date: string; name: string; picture: any }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '13px', marginBottom: '30px' }}>
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
      <div>
        <div style={{ color: '#797979', fontSize: '14px', fontWeight: '600' }}>{name}</div>
        <div style={{ color: '#999999', fontSize: '14px' }}>Last updated: {format(new Date(date), 'LLLL	d, yyyy')}</div>
      </div>
    </div>
  );
}
