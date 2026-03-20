import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import Link from 'next/link';

export default async function TopMenu() {
  // ดึงข้อมูล Session จาก Server ว่ามีคน Log-in อยู่หรือไม่
  const session = await getServerSession(authOptions);

  return (
    <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      
      {/* ด้านซ้าย: Sign-In / Sign-Out */}
      <div className="flex items-center space-x-4">
        {session ? (
          <Link href="/api/auth/signout" className="text-gray-600 hover:text-black font-medium">
            Sign-Out
          </Link>
        ) : (
          <Link href="/api/auth/signin" className="text-gray-600 hover:text-black font-medium">
            Sign-In
          </Link>
        )}
      </div>

      {/* ด้านขวา: Booking & Logo */}
      <div className="flex items-center space-x-4">
        <TopMenuItem title="Booking" pageRef="/booking" />
        <div className="flex items-center">
          <Image src="/img/logo.png" alt="logo" width={40} height={40} className="object-contain" />
        </div>
      </div>

    </div>
  );
}