"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, Bell, User } from "lucide-react";

const NAV_LINKS = [
  { href: "/news", label: "News" },
  { href: "/gurus", label: "Gurus" },
  { href: "/history", label: "History" },
  { href: "/notable-sikhs", label: "Notable Sikhs" },
  { href: "/hukumnama", label: "Hukumnama" },
  { href: "/darshan", label: "Live Darshan" },
  { href: "/horoscopes", label: "Horoscopes" },
  { href: "/blogs", label: "Blogs" },
  { href: "/community", label: "Community" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-amber-200 shadow-sm">
      {/* Top bar */}
      <div className="bg-amber-700 text-white text-xs py-1 px-4 text-center">
        ☬ &nbsp;
        <span className="font-medium">SikhiTimes</span> — Neutral · Research-Based · Sikh Information Platform
        &nbsp; ☬
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-amber-800">
          <span className="text-2xl">☬</span>
          <span>
            <span className="text-amber-700">Sikhi</span>
            <span className="text-gray-800">Times</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-500 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="p-2 text-gray-500 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-colors" aria-label="Notifications">
            <Bell size={18} />
          </button>
          <Link
            href="/auth/signin"
            className="hidden sm:flex items-center gap-1 px-4 py-2 bg-amber-700 text-white text-sm font-medium rounded-lg hover:bg-amber-800 transition-colors"
          >
            <User size={14} />
            Sign In
          </Link>
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-amber-50 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-amber-100 bg-white px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-gray-700 hover:text-amber-700 border-b border-gray-50 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/auth/signin"
            className="mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-amber-700 text-white text-sm font-medium rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            <User size={14} />
            Sign In / Register
          </Link>
        </div>
      )}
    </header>
  );
}
