import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Brain, Sparkles, TrendingUp, Clock, DollarSign, Target, Rocket, CheckCircle, Star, Zap, AlertTriangle } from 'lucide-react';
import { Link } from '../router';
import AnimatedSection from '../components/AnimatedSection';
import BrandName from '../components/BrandName';

interface Question {
  question: string;
  subtitle: string;
  options: { text: string; tag: string }[];
  image: string;
}

const questions: Question[] = [
  {
    question: 'Be honest — when you think about starting online, what actually stops you?',
    subtitle: 'Not the surface answer. The real one.',
    image: 'https://images.pexels.com/photos/19280606/pexels-photo-19280606.jpeg?auto=compress&cs=tinysrgb&w=1600',
    options: [
      { text: 'I have too many ideas and can\'t pick one', tag: 'overwhelm' },
      { text: 'I don\'t have any idea at all — just a blank screen', tag: 'blank' },
      { text: 'I know what I want but don\'t know the first step', tag: 'gap' },
      { text: 'I start things but never finish them', tag: 'followthrough' },
    ],
  },
  {
    question: 'How much money are you willing to lose before you quit?',
    subtitle: 'Every beginner loses something — time, money, or pride. Which one are you most afraid of?',
    image: 'https://images.pexels.com/photos/880989/pexels-photo-880989.jpeg?auto=compress&cs=tinysrgb&w=1600',
    options: [
      { text: '$0 — I refuse to spend anything until I see results', tag: 'riskfree' },
      { text: 'Under $50 — I\'ll buy a tool if it\'s proven', tag: 'lowrisk' },
      { text: '$50–200 — I\'ll invest in myself if the path is clear', tag: 'midrisk' },
      { text: 'Whatever it takes — I just need the right map', tag: 'committed' },
    ],
  },
  {
    question: 'It\'s 11 PM on a Tuesday. Nobody is watching. What are you actually doing?',
    subtitle: 'Your answer here matters more than any goal you\'ve written down.',
    image: 'https://images.pexels.com/photos/8037008/pexels-photo-8037008.jpeg?auto=compress&cs=tinysrgb&w=1600',
    options: [
      { text: 'Scrolling social media, wishing I was doing more', tag: 'passive' },
      { text: 'Watching tutorials but never applying them', tag: 'consumer' },
      { text: 'Working on something small — even if it\'s messy', tag: 'builder' },
      { text: 'Planning tomorrow so I don\'t waste another day', tag: 'planner' },
    ],
  },
  {
    question: 'If someone gave you a proven step-by-step plan today, what would happen in 30 days?',
    subtitle: 'Not what you hope. What actually happened last time you tried.',
    image: 'https://images.pexels.com/photos/34658150/pexels-photo-34658150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    options: [
      { text: 'I\'d follow it for a week, then life would get in the way', tag: 'inconsistent' },
      { text: 'I\'d overthink step 1 and never move to step 2', tag: 'paralysis' },
      { text: 'I\'d follow it — but I\'ve never had a plan this clear', tag: 'eager' },
      { text: 'I\'d finish it and ask what\'s next', tag: 'finisher' },
    ],
  },
  {
    question: 'Last question. Why now?',
    subtitle: 'You\'ve thought about this before. Something is different today.',
    image: 'https://images.pexels.com/photos/15712479/pexels-photo-15712479.jpeg?auto=compress&cs=tinysrgb&w=1600',
    options: [
      { text: 'I\'m tired of watching other people succeed online', tag: 'frustrated' },
      { text: 'I finally have time and don\'t want to waste it', tag: 'ready' },
      { text: 'I need an income source that doesn\'t depend on someone else', tag: 'urgent' },
      { text: 'I\'ve been planning for months — it\'s time to move', tag: 'decided' },
    ],
  },
];

const getResult = (tags: string[]): { title: string; body: string; score: number } => {
  const committed = tags.filter((t) => ['committed', 'midrisk', 'builder', 'eager', 'finisher', 'ready', 'decided', 'urgent'].includes(t)).length;
  const score = Math.round((committed / tags.length) * 100);

  if (score >= 70) {
    return {
      title: 'You\'re ready. The only thing missing is the map.',
      body: 'Your answers show someone who\'s done waiting. You\'re not afraid of effort — you\'re afraid of wasting it on the wrong thing. That\'s smart. The Elyntric Beginner Blueprint gives you the exact 30-day plan that turns your willingness into visible progress. No guesswork. No fluff. Just the next right step, every single day.',
      score,
    };
  }
  if (score >= 40) {
    return {
      title: 'You\'re close. One thing is holding you back.',
      body: 'You have the desire and some of the discipline, but you\'re missing a clear system. Most beginners stall not because they\'re lazy — but because they\'re guessing. The Elyntric Beginner Blueprint replaces guessing with a proven path. It meets you where you are and walks you to your first real win.',
      score,
    };
  }
  return {
    title: 'You\'re honest. That\'s rare — and it\'s your advantage.',
    body: 'Most beginners lie to themselves about how ready they are. You didn\'t. That self-awareness is exactly what the Elyntric Beginner Blueprint is built for. It doesn\'t assume you\'re already motivated — it builds the motivation for you, one small win at a time. Start with the first lesson. You\'ll know within 24 hours if this is different.',
    score,
  };
};

const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnswer = (option: { text: string; tag: string }) => {
    const newAnswers = [...answers, option.text];
    const newTags = [...tags, option.tag];
    setAnswers(newAnswers);
    setTags(newTags);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setTags([]);
    setShowResult(false);
  };

  const result = getResult(tags);
  const q = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Fixed parallax background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${showResult ? questions[4].image : q.image}')`,
            transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
            transition: 'background-image 0.8s ease-in-out',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
      </div>

      <div className="relative z-10 pt-20 px-4">
        <div className="max-w-3xl mx-auto py-12">
          {/* Back link */}
          <AnimatedSection animation="fade-up">
            <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </AnimatedSection>

          {/* Header */}
          <AnimatedSection animation="scale-up">
            <div className="flex items-center justify-center mb-10 group">
              <div className="relative mr-3">
                <Brain className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="absolute -inset-3 rounded-full bg-cyan-400/15 blur-xl animate-pulse" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                The <span className="text-cyan-400">Honest</span> Quiz
              </h1>
            </div>
          </AnimatedSection>

          {!showResult ? (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-slate-400">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm text-slate-400">
                    {Math.round(((currentQuestion) / questions.length) * 100)}% complete
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 ease-out"
                    style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question card */}
              <AnimatedSection key={currentQuestion} animation="fade-up">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 md:p-10 shadow-2xl">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400 text-sm font-bold">
                        {currentQuestion + 1}
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{q.subtitle}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold leading-snug text-white">
                      {q.question}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {q.options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(option)}
                        className="w-full text-left px-5 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-500 hover:bg-cyan-500/5 transition-all duration-300 group flex items-center justify-between"
                      >
                        <span className="text-slate-200 group-hover:text-cyan-300 transition-colors text-sm md:text-base">
                          {option.text}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Trust indicator */}
              <div className="mt-8 text-center">
                <p className="text-xs text-slate-500">
                  Your answers are private. No account needed. No email required.
                </p>
              </div>
            </>
          ) : (
            <AnimatedSection animation="scale-up">
              {/* Result card */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-8 md:p-12 shadow-2xl text-center">
                {/* Score badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 shadow-lg shadow-cyan-500/30">
                  <span className="text-2xl font-bold text-white">{result.score}%</span>
                </div>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs uppercase tracking-[0.2em] text-cyan-400">Your Result</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  {result.title}
                </h2>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                  {result.body}
                </p>

                {/* What you get section */}
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-6 mb-8 text-left">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4 text-center">What\'s inside the Blueprint</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: Target, text: '30-day step-by-step roadmap' },
                      { icon: Zap, text: 'Daily action checklist' },
                      { icon: TrendingUp, text: 'Progress tracking system' },
                      { icon: Rocket, text: 'First-win framework' },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                            <Icon className="h-4 w-4" />
                          </span>
                          {item.text}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Urgency banner */}
                <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 flex items-center justify-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <p className="text-sm text-amber-200">
                    You\'ve been thinking about this for a while. The longer you wait, the harder step one becomes.
                  </p>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://elyntric.gumroad.com/l/X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 transform hover:-translate-y-1 inline-flex items-center justify-center overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Get the Beginner Blueprint
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </a>
                  <Link
                    to="/ai"
                    className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center border border-slate-700"
                  >
                    Ask elynAI for Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                <button
                  onClick={handleRestart}
                  className="mt-6 text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  Retake Quiz
                </button>
              </div>

              {/* Social proof parallax strip */}
              <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-400 max-w-lg mx-auto">
                  Join beginners who stopped guessing and started building. Your path is simpler than you think — but only if you have the right map.
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
