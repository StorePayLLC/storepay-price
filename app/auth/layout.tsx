import { Layout } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const { Content } = Layout;

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <header className="p-4">
        <div className="max-w-md mx-auto">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold text-white">SPC</span>
          </Link>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}