import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold text-prussian">
      ConvertBankStatement
    </Link>
  );
}