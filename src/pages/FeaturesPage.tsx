import React from 'react';
import { ArrowLeft, ArrowRight, Compass, Map, PencilRuler, Rocket, Sparkles, Target } from 'lucide-react';
import { Link } from '../router';
import AnimatedSection from '../components/AnimatedSection';

const stages = [
  {
    eyebrow: 'Step 01',
    title: 'Start where you are',
    body: 'You do not need a polished idea or a big budget. Tell us what you already enjoy, how much time you can spare, and what feels unclear. We turn that into a starting line instead of a wall.',
    image: 'https://images.pexels.com/photos/6774944/pexels-photo-6774944.jpeg?auto=compress&cs=tinysrgb&w=1600',
    align: 'left' as const,
    icon: Compass,
  },
  {
    eyebrow: 'Step 02',
    title: 'Map a path that fits your life',
    body: 'Your plan should match your real schedule, not a generic template. We break the first 30 days into small, repeatable actions so progress stops feeling random and starts feeling like a rhythm.',
    image: 'https://images.pexels.com/photos/6476797/pexels-photo-6476797.jpeg?auto=compress&cs=tinysrgb&w=1600',
    align: 'right' as const,
    icon: Map,
  },
  {
    eyebrow: 'Step 03',
    title: 'Build something you can show',
    body: 'Theory fades fast. Each step produces a small piece of work you can share, whether that is a post, a simple product, or a service offer. Showing your work is how clarity arrives.',
    image: 'https://images.pexels.com/photos/19148312/pexels-photo-19148312.jpeg?auto=compress&cs=tinysrgb&w=1600',
    align: 'left' as const,
    icon: PencilRuler,
  },
  {
    eyebrow: 'Step 04',
    title: 'Grow with feedback, not guesswork',
    body: 'Once something small is live, the next move is to listen. We help you read the response, adjust one thing at a time, and compound small wins into a direction you can trust.',
    image: 'https://images.pexels.com/photos/6925404/pexels-photo-6925404.jpeg?auto=compress&cs=tinysrgb&w=1600',
    align: 'right' as const,
    icon: Rocket,
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/914931/pexels-photo-914931.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-50 dark:to-slate-950" />
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <AnimatedSection animation="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> How it works
            </span>
          </AnimatedSection>
          <AnimatedSection delay={150} animation="fade-up">
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">From confused to building, one step at a time.</h1>
          </AnimatedSection>
          <AnimatedSection delay={300} animation="fade-up">
            <p className="mx-auto mt-5 max-w-xl text-base text-slate-200 md:text-lg">A guided path that meets beginners where they are and turns uncertainty into small, visible progress.</p>
          </AnimatedSection>
          <AnimatedSection delay={450} animation="scale-up">
            <Link to="/quiz" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-transform hover:scale-105">
              Take the quiz <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">A clear route, not a maze of tabs</h2>
          </AnimatedSection>
          <AnimatedSection delay={150} animation="fade-up">
            <p className="mt-5 text-slate-600 dark:text-slate-300">Most beginners stall because the plan is too big. Elyntric breaks the journey into four honest stages. Each one is small enough to finish and meaningful enough to matter.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Parallax stages */}
      {stages.map((stage, index) => {
        const Icon = stage.icon;
        const isLeft = stage.align === 'left';
        return (
          <section key={stage.eyebrow} className="relative overflow-hidden">
            {/* Parallax background band */}
            <div
              className="relative h-[55vh] min-h-[380px] w-full bg-cover bg-fixed bg-center"
              style={{ backgroundImage: `url('${stage.image}')` }}
            >
              <div className="absolute inset-0 bg-slate-950/55" />
              <div className="relative z-10 flex h-full items-center justify-center px-4">
                <AnimatedSection animation="scale-up">
                  <div className="text-center text-white">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                      <Icon className="h-7 w-7" />
                    </span>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">{stage.eyebrow}</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Content block */}
            <div className="bg-white px-4 py-16 dark:bg-slate-950">
              <div className="mx-auto max-w-5xl">
                <div className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 ${isLeft ? '' : 'md:[&>div:first-child]:order-2'}`}>
                  <AnimatedSection animation={isLeft ? 'slide-left' : 'slide-right'}>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">{stage.eyebrow}</span>
                      <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{stage.title}</h3>
                      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{stage.body}</p>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={150} animation={isLeft ? 'slide-right' : 'slide-left'}>
                    <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl dark:border-slate-800">
                      <img src={stage.image} alt={stage.title} className="h-64 w-full object-cover md:h-80" loading="lazy" />
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
            {index < stages.length - 1 && <div className="h-px w-full bg-slate-200 dark:bg-slate-800" />}
          </section>
        );
      })}

      {/* Closing CTA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-slate-900 p-10 text-center text-white shadow-2xl dark:bg-slate-800">
          <Target className="mx-auto h-10 w-10 text-cyan-400" />
          <h2 className="mt-5 text-3xl font-bold tracking-tight">Your path is waiting</h2>
          <p className="mt-3 text-slate-300">Answer five quick questions and get a recommendation shaped by where you are today.</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/quiz" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">Take the quiz <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/ai" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">Ask elynAI</Link>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-5xl">
          <Link to="/" className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-400 dark:text-cyan-400">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
