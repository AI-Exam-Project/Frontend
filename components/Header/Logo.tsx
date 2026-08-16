import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2">
      <Image
        src="/logo.png"
        alt="مسار التميز"
        width={200}
        height={200}
        priority
        className="h-9 w-auto lg:h-14"
      />
    </Link>
  );
}