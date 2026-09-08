import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowUp, Brain, Compass, Lightbulb, Rocket, Sparkles } from 'lucide-react';
import { Link } from '../router';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const greetingSuggestions = [
  { icon: Compass, text: 'What online path fits me?' },
  { icon: Lightbulb, text: 'Give me a beginner business idea' },
  { icon: Rocket, text: 'How do I start with $0?' },
  { icon: Sparkles, text: 'Help me plan my first 30 days' },
];

const responses = [
  'Start by choosing one skill you can practice consistently. Content creation, freelancing, and simple digital services are friendly places to begin because you can learn with free tools.',
  'A good online path sits at the intersection of what you enjoy, what you can learn, and what people already need. Tell me about your interests and I will help you narrow it down.',
  'You can start without spending money. Pick one small project, share your progress publicly, and use the feedback to improve. Consistency will take you further than buying lots of tools early.',
  'Give one direction at least 90 days before switching. Set a weekly target, keep a simple record of what you learn, and turn each week into something you can show someone.',
];

const AiPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  const send = (text: string) => {
    if (!text.trim() || isLoading) return;
    setMessages((prev) => [...prev, { role: 'user', content: text.trim() }]);
    setInput('');
    setIsLoading(true);
    window.setTimeout(() => {
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 900);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const showGreeting = messages.length === 0;

  return (
    <main className="flex h-[calc(100dvh-4rem)] min-h-[560px] flex-col bg-white dark:bg-slate-950">
      {/* Top bar */}
      <header className="flex shrink-0 items-center justify-between border-b border-slate-200 px-4 py-2.5 dark:border-slate-800">
        <Link to="/" className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400">
          <span className="text-base">←</span> Home
        </Link>
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
            <Brain className="h-4 w-4" />
          </span>
          elynAI
        </div>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
          {showGreeting ? (
            <div className="flex flex-col items-center justify-center pt-10 text-center sm:pt-20">
              <div className="relative mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white shadow-xl shadow-cyan-500/20">
                  <Sparkles className="h-8 w-8" />
                </div>
                <div className="absolute -inset-2 -z-10 rounded-3xl bg-cyan-400/20 blur-2xl" />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 sm:text-3xl">
                Hi, I'm elynAI
              </h1>
              <p className="mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400 sm:text-base">
                I help confused beginners find a clear path to start online. Ask me anything or try a suggestion below.
              </p>

              <div className="mt-10 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                {greetingSuggestions.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.text}
                      onClick={() => send(s.text)}
                      className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left transition-all hover:border-cyan-400 hover:bg-slate-50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-500 dark:hover:bg-slate-800"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="pt-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">{s.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {messages.map((msg, i) => (
                <div key={i} className={msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  {msg.role === 'assistant' && (
                    <div className="mr-3 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
                      <Sparkles className="h-4 w-4" />
                    </div>
                  )}
                  <div
                    className={
                      msg.role === 'user'
                        ? 'max-w-[80%] rounded-3xl rounded-br-lg bg-gradient-to-br from-cyan-500 to-blue-600 px-5 py-3 text-sm leading-7 text-white shadow-lg shadow-cyan-500/10 sm:text-[15px]'
                        : 'max-w-[80%] rounded-3xl rounded-bl-lg bg-slate-100 px-5 py-3 text-sm leading-7 text-slate-800 dark:bg-slate-800 dark:text-slate-100 sm:text-[15px]'
                    }
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="mr-3 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div className="rounded-3xl rounded-bl-lg bg-slate-100 px-5 py-4 dark:bg-slate-800">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="shrink-0 px-4 pb-4 sm:px-6 sm:pb-5">
        <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
          <div className="flex items-end gap-2 rounded-[28px] border border-slate-200 bg-slate-50 p-2 pl-5 shadow-sm transition-all focus-within:border-cyan-500 focus-within:shadow-md dark:border-slate-700 dark:bg-slate-900">
            <input
              aria-label="Message elynAI"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask elynAI anything..."
              disabled={isLoading}
              className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white sm:text-[15px]"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={isLoading || !input.trim()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-white transition-all hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-400">elynAI can help you explore ideas. Your progress is still yours to build.</p>
        </form>
      </div>
    </main>
  );
};

export default AiPage;
