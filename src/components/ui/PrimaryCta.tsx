"use client";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  icon?: React.ReactNode;
  className?: string;
  event?: string;
};

export default function PrimaryCta({ href, children, variant = "primary", icon, className, event }: Props) {
  return (
    <Link
      href={href}
      onClick={() => event && track(event)}
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium transition",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
        variant === "primary"
          ? "bg-[var(--brand)] text-white hover:brightness-110"
          : "bg-white/10 text-white hover:bg-white/15 backdrop-blur",
        className
      )}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}
