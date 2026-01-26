import { normalizeLink } from "@/lib";

export default function NormalizedLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const link = normalizeLink(href);

  if (!link) return null;

  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}
