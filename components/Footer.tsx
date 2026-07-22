export default function Footer() {
  return (
    <footer className="bg-background-subtle border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter py-20 px-margin-desktop w-full max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <span className="font-display font-black text-white mb-6 block text-2xl">EchoAI</span>
          <p className="font-body text-on-surface-variant mb-6 pr-4">
            Revolutionizing receptionist services for HVAC and home-service businesses with
            state-of-the-art AI automation.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-white hover:bg-growth-green hover:text-deep-forest hover:scale-110 active:scale-90 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-white font-bold mb-6 uppercase tracking-widest text-sm">Resources</h4>
          <ul className="space-y-4">
            <li><a className="font-body text-on-surface-variant hover:text-growth-green hover:translate-x-1 transition-all inline-block" href="#industries">Industry Expertise</a></li>
            <li><a className="font-body text-on-surface-variant hover:text-growth-green hover:translate-x-1 transition-all inline-block" href="#stories">Success Stories</a></li>
            <li><a className="font-body text-on-surface-variant hover:text-growth-green hover:translate-x-1 transition-all inline-block" href="#programs">Pricing Plans</a></li>
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
          © 2026 EchoAI Receptionists. All rights reserved. Built for HVAC &amp; Home Services.
        </p>
        <div className="flex gap-8">
          <a className="font-mono text-label-sm text-on-surface-variant hover:text-growth-green underline transition-all" href="#">Privacy Policy</a>
          <a className="font-mono text-label-sm text-on-surface-variant hover:text-growth-green underline transition-all" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
