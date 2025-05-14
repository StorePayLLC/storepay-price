import ArrowLong from '@/assets/images/global/arrow-long.svg';
import Link from '@/components/link';

const ButtonOutlined = ({ title, href }: { title: string; href: string }) => (
  <Link
    href={href}
    type="button"
    target="_blank"
    className="text-md button-outlined mx-auto flex w-fit items-center gap-3 rounded-[30px] px-10 py-3 text-[#ABB1BA]"
    style={{ border: '1px solid #ABB1BA' }}
  >
    {title}
    <ArrowLong />
  </Link>
);

export default ButtonOutlined;
