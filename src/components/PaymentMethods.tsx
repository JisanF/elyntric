import React from 'react';
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const PaymentMethods: React.FC = () => {
  return (
    <section className="bg-white px-4 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection animation="fade-up">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">Ready when you are</p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">Choose your next move</h2>
            <p className="text-slate-600 dark:text-slate-300">Start with the free path, then use the complete guide when you want a deeper plan.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200} animation="fade-up">
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
            <a href="https://elyntric.gumroad.com/l/X" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-3xl bg-slate-900 p-7 text-white shadow-xl shadow-slate-900/15 transition-transform duration-300 hover:-translate-y-1 dark:bg-slate-800">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/20 blur-2xl transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">Complete guide</span>
                  <ArrowUpRight className="h-5 w-5 text-cyan-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-2xl font-bold">Build with a clear plan</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Get the full Elyntric guide for turning your answers into practical next steps.</p>
                <span className="mt-7 inline-flex items-center rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-cyan-400">View the guide</span>
              </div>
            </a>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">Secure checkout</span>
                <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Simple and transparent</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">The guide link opens a secure checkout. No confusing steps, just the resource you came for.</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Clear, beginner-friendly steps</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Access the guide from any device</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Secure payment processing</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PaymentMethods;
