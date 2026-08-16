import Link from "next/link";

interface LinkItem {
  href: string;
  label: string;
}

interface FooterLinksColumnProps {
  title: string;
  links: LinkItem[];
}

export default function FooterLinksColumn({ title, links }: FooterLinksColumnProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-base font-bold text-[#002C5A]">{title}</h3>
      <ul className="flex flex-col gap-2.5 text-sm text-slate-600">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-[#002C5A]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}