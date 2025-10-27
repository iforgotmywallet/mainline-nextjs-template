import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Product", href: "/#feature-modern-teams" },
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "Xwitter", href: "https://x.com/ausrobdev" },
    { name: "LinkedIn", href: "#" },
  ];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Start analyzing stocks today
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          StockNotes is the comprehensive AI-powered platform for generating
          professional stock analysis reports with real-time data and
          multi-agent insights.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="#pricing">Get started free</a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <p className="text-muted-foreground mb-4 text-sm">
            Built on research forked from{" "}
            <Link
              href="https://github.com/TauricResearch"
              className="underline underline-offset-4 hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              TauricResearch
            </Link>
            , enhanced with full spectrum of real-time data and L40S NVIDIA GPU
            for scaled and enhanced analysis.
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-primary mt-10 w-full md:mt-14 lg:mt-20"></div>
    </footer>
  );
}
