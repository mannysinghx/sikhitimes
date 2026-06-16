"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Search, Bell, User, ChevronDown } from "lucide-react";

interface NavGroup {
  label: string;
  links: { href: string; label: string; desc?: string }[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    label: "Learn",
    links: [
      { href: "/gurus",       label: "The 10 Sikh Gurus",    desc: "Profiles of all ten Sikh Gurus" },
      { href: "/history",     label: "Sikh History",          desc: "Timeline from 1469 to today" },
      { href: "/battles",     label: "Sikh Battles",          desc: "28+ battles from Bhangani to Saragarhi" },
      { href: "/prayers",     label: "Prayers & Banis",       desc: "Japji Sahib, Ardas, and more" },
      { href: "/symbols",     label: "Sikh Symbols",          desc: "Khanda, 5 Ks, Dastar & more" },
      { href: "/festivals",   label: "Festivals & Gurpurabs", desc: "Vaisakhi, Bandi Chhor, and all Gurpurabs" },
    ],
  },
  {
    label: "Explore",
    links: [
      { href: "/news",          label: "Punjab & World News",   desc: "AI-fetched Sikh news worldwide" },
      { href: "/notable-sikhs", label: "Notable Sikhs",         desc: "47 inspiring Sikh profiles" },
      { href: "/holy-sites",    label: "Holy Sites & Gurdwaras", desc: "Five Takhts & major Gurdwaras" },
      { href: "/diaspora",      label: "Sikh Diaspora",         desc: "30M Sikhs across the globe" },
      { href: "/blogs",         label: "AI Blogs",               desc: "Daily articles on Sikh life" },
    ],
  },
  {
    label: "Spiritual",
    links: [
      { href: "/hukumnama",   label: "Daily Hukumnama",       desc: "Golden Temple's daily command" },
      { href: "/darshan",     label: "Live Darshan",           desc: "Webcams from Gurdwaras worldwide" },
      { href: "/horoscopes",  label: "Horoscopes",             desc: "Daily & weekly with Sikh perspective" },
    ],
  },
  {
    label: "Community",
    links: [
      { href: "/community",   label: "Community Chat",         desc: "Connect with Sikhs worldwide" },
      { href: "/about",       label: "About SikhiTimes",       desc: "Our mission & editorial policy" },
    ],
  },
];

function DropdownMenu({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
          open ? "text-amber-700 bg-amber-50" : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
        }`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {group.label}
        <ChevronDown size={13} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-100 rounded-xl shadow-lg z-50 py-2 overflow-hidden">
          {group.links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col px-4 py-2.5 hover:bg-amber-50 transition-colors group"
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-medium text-gray-800 group-hover:text-amber-800">
                {link.label}
              </span>
              {link.desc && (
                <span className="text-xs text-gray-400 mt-0.5">{link.desc}</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-amber-200 shadow-sm">
      {/* Top bar */}
      <div className="bg-amber-700 text-white text-xs py-1 px-4 text-center">
        ☬ &nbsp;
        <span className="font-medium">SikhiTimes</span> — Neutral · Research-Based · Sikh Information Platform
        &nbsp; ☬
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-amber-800 flex-shrink-0">
          <span className="text-xl">☬</span>
          <span>
            <span className="text-amber-700">Sikhi</span>
            <span className="text-gray-800">Times</span>
          </span>
        </Link>

        {/* Desktop nav — dropdown groups */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_GROUPS.map(group => (
            <DropdownMenu key={group.label} group={group} />
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-1.5">
          <button className="p-2 text-gray-500 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-colors" aria-label="Search">
            <Search size={17} />
          </button>
          <button className="p-2 text-gray-500 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-colors" aria-label="Notifications">
            <Bell size={17} />
          </button>
          <Link
            href="/auth/signin"
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-amber-700 text-white text-xs font-semibold rounded-lg hover:bg-amber-800 transition-colors"
          >
            <User size={13} />
            Sign In
          </Link>
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
        <div className="lg:hidden border-t border-amber-100 bg-white pb-4 max-h-[80vh] overflow-y-auto">
          {NAV_GROUPS.map(group => (
            <div key={group.label}>
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-gray-700 bg-gray-50 border-b border-gray-100"
                onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
              >
                {group.label}
                <ChevronDown size={14} className={`transition-transform ${openGroup === group.label ? "rotate-180" : ""}`} />
              </button>
              {openGroup === group.label && (
                <div className="bg-white">
                  {group.links.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-6 py-2.5 text-sm text-gray-700 hover:text-amber-700 border-b border-gray-50 last:border-0"
                      onClick={() => { setMobileOpen(false); setOpenGroup(null); }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-4 pt-4">
            <Link
              href="/auth/signin"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-amber-700 text-white text-sm font-semibold rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              <User size={14} />
              Sign In / Register (Free)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
