import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import "./NavLink.css";

type NavLinkProps = Omit<ComponentProps<typeof Link>, "children"> & {
  short?: string;
  children: ReactNode;
};

export default function NavLink({ short, className, children, ...rest }: NavLinkProps) {
  return (
    <Link className={["nav-pill-link", className].filter(Boolean).join(" ")} {...rest}>
      {short && <span className="nav-pill-short">{short}</span>}
      <span className="nav-pill-label">{children}</span>
    </Link>
  );
}
