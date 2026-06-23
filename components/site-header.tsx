"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onHome = pathname === "/";
  const transparent = onHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "border-b border-white/10 bg-background/80 backdrop-blur-xl shadow-sm",
      )}
    >
      <div className="mx-auto flex h-20 lg:h-24 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "group flex items-center gap-2.5 lg:gap-3 transition-all duration-300 hover:opacity-95",
            transparent ? "text-white" : "text-foreground",
          )}
        >
          <Image
            src="/brasão.jpg"
            alt="Visite Poranga"
            width={72}
            height={72}
            priority
            className="
      h-14
      w-auto
      object-contain
      transition-transform
      duration-300
      group-hover:scale-105

      lg:h-16
    "
          />

          <div className="flex flex-col leading-none">
            <span
              className="
        font-heading
        text-lg
        font-semibold
        tracking-tight

        lg:text-xl
      "
            >
              Visite Poranga
            </span>

            <span
              className={cn(
                `
        mt-1
        text-[11px]
        font-medium
        tracking-wide
        lg:text-xs
        `,
                transparent ? "text-white/75" : "text-muted-foreground",
              )}
            >
              Portal Oficial de Turismo
            </span>
          </div>
        </Link>
        {/* Desktop */}
        <nav
          className="hidden items-center gap-2 lg:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;

            const isCTA = link.href === "/planeje-sua-visita";

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  `
            rounded-full
            px-5
            py-2.5
            text-sm
            font-medium
            transition-all
            duration-300
          `,
                  isCTA &&
                    "ml-3 bg-primary text-primary-foreground shadow-lg hover:scale-105 hover:shadow-xl",

                  !isCTA &&
                    (transparent
                      ? active
                        ? "bg-white/20 text-white backdrop-blur-md"
                        : "text-white/90 hover:bg-white/10 hover:text-[#FBC02D]"
                      : active
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-primary/10 hover:text-primary"),
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            `
      inline-flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      transition-all
      duration-300
      lg:hidden
      `,
            transparent
              ? "border-white/20 bg-black/20 text-white backdrop-blur-xl"
              : "border-border bg-background text-foreground shadow-md",
          )}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav
          className="
      border-t
      border-white/10
      bg-background/95
      backdrop-blur-2xl
      lg:hidden
    "
          aria-label="Navegação principal móvel"
        >
          <ul className="space-y-2 px-5 py-5">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              const isCTA = link.href === "/planeje-sua-visita";

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      `
                block
                rounded-2xl
                px-5
                py-4
                text-base
                font-medium
                transition-all
                duration-300
              `,
                      isCTA
                        ? "bg-primary text-primary-foreground text-center shadow-lg"
                        : active
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-secondary",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
