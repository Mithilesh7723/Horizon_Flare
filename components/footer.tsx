"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-0 mb-4">
              <img src="/logo-icon.png" alt="Horizon Flare" className="h-14 w-14" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Horizon Flare
              </span>
            </div>
            <p className="text-white/60 max-w-xs">
              Igniting Ideas, Powering Impact
            </p>
            <p className="text-white/50 text-sm">MSME Certified Company</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <Link href="/services/vapt" className="hover:text-white transition-colors">
                  VAPT Services
                </Link>
              </li>
              <li>
                <Link href="/services/development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="hover:text-white transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/innovation-lab" className="hover:text-white transition-colors">
                  Innovation Lab
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-white/60">
              <li>info@horizonflare.in</li>
              <li>+91 77229 62509</li>
              <li>Bhopal, MP, India</li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40">
          <p>&copy; 2025 Horizon Flare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
