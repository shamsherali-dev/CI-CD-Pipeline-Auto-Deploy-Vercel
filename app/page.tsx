import React from 'react';

const Page = () => {
  // Simple SVG icon component
  const Icon = ({ d }: { d: string }) => (
    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
    </svg>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="text-2xl font-bold text-blue-500 italic">SECURE.OPS</div>
      </nav>

      {/* Hero Section */}
      <header className="px-10 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-white">
          Secure Faster. <span className="text-blue-500">Deploy Smarter.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Bridging the gap between Development, Security, and Operations.
        </p>
        <button className="bg-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
          Get Started
        </button>
      </header>

      {/* Features */}
      <section className="px-10 py-20 bg-slate-900">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl">
            <Icon d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            <h3 className="text-xl font-semibold mt-4 mb-2">Secure Coding</h3>
            <p className="text-slate-400 text-sm">Automated vulnerability scanning.</p>
          </div>
          <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl">
            <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            <h3 className="text-xl font-semibold mt-4 mb-2">Compliance</h3>
            <p className="text-slate-400 text-sm">Real-time policy enforcement.</p>
          </div>
          <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl">
            <Icon d="M13 10V3L4 14h7v7l9-11h-7z" />
            <h3 className="text-xl font-semibold mt-4 mb-2">CI/CD Flow</h3>
            <p className="text-slate-400 text-sm">Security integrated into pipelines</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;