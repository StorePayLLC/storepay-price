import { Card } from 'antd';
import Image, { StaticImageData } from 'next/image';

import ph from '@/assets/images/global/placeholder-image.jpg';
import Link from '@/components/link';
import { convertISOToDate } from '@/utils/helpers';

const CardBlog = ({
  title,
  image,
  date,
  link,
  category,
}: {
  title: string;
  image: string | StaticImageData;
  link: string;
  date: string;
  category: string;
}) => (
  <Link href={link || '#'} target="_blank">
    <Card
      hoverable
      cover={
        <Image
          alt={title}
          src={image || ph}
          width={405}
          height={244}
          className="h-[244px] w-[405px] object-cover object-center"
        />
      }
      style={{ borderRadius: 20, overflow: 'hidden' }}
      styles={{ body: { borderBottomRightRadius: 20, borderBottomLeftRadius: 20, padding: 24 }, header: { overflow: 'hidden' } }}
    >
      <div className="flex items-center justify-between">
        <p className="mb-0 text-lg font-light text-[#737D8C]">{category}</p>
        <p className="mb-0 text-lg font-light text-[#ABB1BA]">{convertISOToDate(date)}</p>
      </div>
      <h3 className="mt-4 line-clamp-4 min-h-[112px] text-xl font-normal text-black-2">{title}</h3>
    </Card>
  </Link>
);

export default CardBlog;
