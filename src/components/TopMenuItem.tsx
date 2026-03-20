import Link from 'next/link';

interface TopMenuItemProps {
  title: string;
  pageRef: string;
}

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link href={pageRef} className="text-gray-500 hover:text-gray-800 font-medium px-4 py-2">
      {title}
    </Link>
  );
}