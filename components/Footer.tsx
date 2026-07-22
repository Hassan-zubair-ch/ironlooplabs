import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background-subtle border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter py-20 px-margin-desktop w-full max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6">
            <Image
              src="/logo-black-bg.png"
              alt="IronLoop Labs Logo"
              width={320}
              height={90}
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
          <p className="font-body text-on-surface-variant mb-6 pr-4">
            Revolutionizing receptionist &amp; workflow automation for healthcare, medical clinics, HVAC, and service businesses.
          </p>
          {/* Social Links for Facebook and Instagram */}
          <div className="flex items-center gap-3">
            {/* Facebook Icon Button */}
            <a
              href="https://web.facebook.com/profile.php?id=61592446882012"
              target="_blank"
              rel="noopener noreferrer"
              title="IronLoop Labs Facebook"
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-white hover:bg-growth-green hover:text-deep-forest hover:scale-110 active:scale-90 transition-all border border-white/10"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram Icon Button */}
            <a
              href="https://www.instagram.com/ironlooplabs/"
              target="_blank"
              rel="noopener noreferrer"
              title="IronLoop Labs Instagram"
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-white hover:bg-growth-green hover:text-deep-forest hover:scale-110 active:scale-90 transition-all border border-white/10"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-white font-bold mb-6 uppercase tracking-widest text-sm">Resources</h4>
          <ul className="space-y-4">
            <li><a className="font-body text-on-surface-variant hover:text-growth-green hover:translate-x-1 transition-all inline-block" href="#industries">Industry Expertise</a></li>
            <li><a className="font-body text-on-surface-variant hover:text-growth-green hover:translate-x-1 transition-all inline-block" href="#stories">Success Stories</a></li>
            <li><a className="font-body text-on-surface-variant hover:text-growth-green hover:translate-x-1 transition-all inline-block" href="#programs">Growth Programs</a></li>
            <li><a className="font-body text-on-surface-variant hover:text-growth-green hover:translate-x-1 transition-all inline-block" href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-white font-bold mb-6 uppercase tracking-widest text-sm">Support</h4>
          <ul className="space-y-4">
            <li><a className="font-body text-on-surface-variant hover:text-growth-green hover:translate-x-1 transition-all inline-block" href="#contact">Contact Support</a></li>
            <li><a className="font-body text-on-surface-variant hover:text-growth-green hover:translate-x-1 transition-all inline-block" href="#">Knowledge Base</a></li>
            <li><a className="font-body text-on-surface-variant hover:text-growth-green hover:translate-x-1 transition-all inline-block" href="#">Developer API</a></li>
            <li><a className="font-body text-on-surface-variant hover:text-growth-green hover:translate-x-1 transition-all inline-block" href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-white font-bold mb-6 uppercase tracking-widest text-sm">Stay Updated</h4>
          <p className="text-sm text-on-surface-variant mb-4">Get the latest growth tactics delivered to your inbox.</p>
          <div className="flex">
            <input
              className="bg-surface-container-low border-white/10 text-white rounded-l-lg w-full focus:ring-growth-green focus:border-growth-green placeholder:text-on-surface-variant/50 transition-all px-3 py-2"
              placeholder="Email address"
              type="email"
            />
            <button className="bg-growth-green text-deep-forest px-4 rounded-r-lg hover:brightness-110 active:scale-95 transition-all">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-8 px-margin-desktop w-full max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-label-sm text-on-surface-variant">
          © 2026 IronLoop Labs. All rights reserved. Built for Healthcare, HVAC &amp; High-Growth Services.
        </p>
        <div className="flex gap-8">
          <a className="font-mono text-label-sm text-on-surface-variant hover:text-growth-green underline transition-all" href="#">Privacy Policy</a>
          <a className="font-mono text-label-sm text-on-surface-variant hover:text-growth-green underline transition-all" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
