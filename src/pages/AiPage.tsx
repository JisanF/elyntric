import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowLeft, Brain, Lightbulb, Send, Sparkles, User } from 'lucide-react';
import { Link } from '../router';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const starterPrompts = ['What should I learn first?', 'Help me choose an online path', 'How can I start for free?'];

const responses = [
  'Start by choosing one skill you can practice consistently. Content creation, freelancing, and simple digital services are friendly places to begin because you can learn with free tools.',
  'A good online path sits at the intersection of what you enjoy, what you can learn, and what people already need. Tell me about your interests and I will help you narrow it down.',
  'You can start without spending money. Pick one small project, share your progress publicly, and use the feedback to improve. Consistency will take you further than buying lots of tools early.',
  'Give one direction at least 90 days before switching. Set a weekly target, keep a simple record of what you learn, and turn each week into something you can show someone.',
];

const AiPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi, I'm elynAI. I can help you choose a direction, plan your first steps, and make online business feel less confusing.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, isLoading]);

  const handleSend = (event?: FormEvent) => {
    event?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((previous) => [...previous, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    window.setTimeout(() => {
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages((previous) => [...previous, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 900);
  };

  const usePrompt = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <main className="h-[calc(100dvh-4rem)] min-h-[560px] overflow-hidden bg-slate-50 px-3 pb-3 pt-4 text-slate-900 dark:bg-slate-950 dark:text-white sm:px-6 sm:pb-6 sm:pt-6">
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-7 sm:py-4 dark:border-slate-800">
          <Link to="/" className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-lg shadow-cyan-500/25">
              <Brain className="h-4 w-4" />
            </span>
            elynAI
            <span className="hidden rounded-full bg-emerald-100 px-2 py-1 text-[11px] font-medium text-emerald-700 sm:inline dark:bg-emerald-500/10 dark:text-emerald-400">Online</span>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="hidden border-r border-slate-200 bg-slate-50/80 p-6 lg:block dark:border-slate-800 dark:bg-slate-950/50">
            <div className="mb-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400">
                <Sparkles className="h-6 w-6" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Find your next step.</h1>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">Ask a question and turn the uncertainty into a simple plan.</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-500/20 dark:bg-amber-500/5">
              <Lightbulb className="mb-3 h-5 w-5 text-amber-600 dark:text-amber-400" />
              <p className="text-sm font-medium leading-5 text-amber-900 dark:text-amber-200">The best plan is one you can keep showing up for.</p>
            </div>
          </aside>

          <section className="flex min-h-0 flex-1 flex-col bg-white dark:bg-slate-900">
            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-8 sm:py-7">
              <div className="mx-auto max-w-3xl space-y-5">
                {messages.map((message, index) => (
                  <div key={`${message.role}-${index}`} className={`flex items-end gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.role === 'assistant' && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-white">
                        <Brain className="h-4 w-4" />
                      </div>
                    )}
                    <div className={`max-w-[min(85%,620px)] rounded-2xl px-4 py-3 text-sm leading-6 sm:px-5 sm:text-[15px] ${message.role === 'user' ? 'rounded-br-md bg-cyan-600 text-white shadow-lg shadow-cyan-900/10' : 'rounded-bl-md border border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200'}`}>
                      {message.content}
                    </div>
                    {message.role === 'user' && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-200">
                        <User className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-end gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500 text-white"><Brain className="h-4 w-4" /></div>
                    <div className="flex gap-1 rounded-2xl rounded-bl-md border border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-800">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="shrink-0 border-t border-slate-200 bg-white p-3 sm:p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="mx-auto max-w-3xl">
                <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                  {starterPrompts.map((prompt) => (
                    <button key={prompt} type="button" onClick={() => usePrompt(prompt)} className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-500 dark:hover:text-cyan-400">
                      {prompt}
                    </button>
                  ))}
                </div>
                <form onSubmit={handleSend} className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-inner focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/10 dark:border-slate-700 dark:bg-slate-950">
                  <input aria-label="Message elynAI" type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask elynAI anything..." disabled={isLoading} className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white" />
                  <button type="submit" aria-label="Send message" disabled={isLoading || !input.trim()} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-600 text-white transition-all hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-40">
                    <Send className="h-4 w-4" />
                  </button>
                </form>
                <p className="mt-2 text-center text-[11px] text-slate-400">elynAI offers general guidance. Your progress is still yours to build.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AiPage;
