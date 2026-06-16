import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-3">
              <span className="text-2xl">☬</span>
              <span>SikhiTimes</span>
            </div>
            <p className="text-sm text-amber-200 leading-relaxed">
              A neutral, research-based Sikh information platform. No bias.
              No agenda. Just truth, history, and community.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-white font-semibold mb-3">Learn</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["The 10 Gurus", "/gurus"],
                ["Sikh History", "/history"],
                ["Notable Sikhs", "/notable-sikhs"],
                ["Hukumnama", "/hukumnama"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Punjab & World News", "/news"],
                ["Live Darshan", "/darshan"],
                ["Horoscopes", "/horoscopes"],
                ["AI Blogs", "/blogs"],
                ["Community", "/community"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["About Us", "/about"],
                ["Editorial Policy", "/about#policy"],
                ["Contact", "/about#contact"],
                ["Privacy Policy", "/privacy"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-amber-300">
          <p>© {new Date().getFullYear()} SikhiTimes. All rights reserved.</p>
          <p className="text-center">
            ☬ &nbsp; Built with respect for the Sikh faith and all humanity. Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh &nbsp; ☬
          </p>
        </div>
      </div>
    </footer>
  );
}
