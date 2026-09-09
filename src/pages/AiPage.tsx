import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUp, Compass, Lightbulb, Rocket, Sparkles } from 'lucide-react';
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

const SYSTEM_PROMPT = `You are elynAI, a friendly and encouraging guide for confused beginners who want to start an online business or build an online presence. Keep answers concise (2-4 sentences), practical, and beginner-friendly. Never recommend spending money on expensive tools. Focus on free resources, consistency, and small actionable steps. If someone asks something unrelated to online business, gently steer the conversation back.`;

const AiPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  const callGemini = async (userText: string): Promise<string> => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      return "I'm not connected to my brain yet. Please add a Gemini API key to activate live responses.";
    }

    const conversationHistory = [...messages, { role: 'user' as const, content: userText }];
    const contents = conversationHistory.map((m) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }));

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 300,
          },
        }),
      }
    );

    if (!res.ok) {
      return "I had trouble reaching my thoughts. Please try again in a moment.";
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return text?.trim() || "I'm not sure how to answer that. Could you rephrase?";
  };

  const send = async (text: string) => {
    if (!text.trim() || isLoading) return;
    setMessages((prev) => [...prev, { role: 'user', content: text.trim() }]);
    setInput('');
    setIsLoading(true);
    try {
      const response = await callGemini(text.trim());
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Something went wrong on my end. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const showGreeting = messages.length === 0;

  return (
    <main className="flex h-[100dvh] flex-col bg-white pt-16 dark:bg-slate-950">
      {/* Header bar */}
      <header className="flex shrink-0 items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="hidden sm:inline">Home</span>
        </Link>

        <div className="flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 animate-spiral-rotate rounded-full border-2 border-cyan-400/40 border-t-cyan-500 border-b-blue-500" />
            <span className="absolute inset-1 animate-spiral-rotate rounded-full border-2 border-blue-400/30 border-t-transparent border-b-purple-500" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />
            <span className="text-base">☠️</span>
          </span>
          <span className="text-base font-semibold text-slate-800 dark:text-slate-100">
            elynAI
          </span>
        </div>

        <Link
          to="/quiz"
          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          Quiz
        </Link>
      </header>

      {/* Messages / Greeting */}
      <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {showGreeting ? (
            <div className="flex min-h-full flex-col justify-center py-8">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
                Hi, <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">buddy!</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 dark:text-slate-400 sm:text-lg">
                I'm elynAI — I help confused beginners find a clear path to start online.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10">
                {greetingSuggestions.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.text}
                      onClick={() => send(s.text)}
                      className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left transition-all hover:border-cyan-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-500"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-medium leading-snug text-slate-700 dark:text-slate-200">{s.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="space-y-6 py-6">
              {messages.map((msg, i) => (
                <div key={i} className={msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  {msg.role === 'assistant' && (
                    <div className="mr-3 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-base">
                      ☠️
                    </div>
                  )}
                  <div
                    className={
                      msg.role === 'user'
                        ? 'max-w-[80%] rounded-3xl rounded-br-md bg-gradient-to-br from-cyan-500 to-blue-600 px-5 py-3 text-sm leading-7 text-white shadow-lg shadow-cyan-500/10 sm:text-[15px]'
                        : 'max-w-[80%] rounded-3xl rounded-bl-md bg-slate-100 px-5 py-3 text-sm leading-7 text-slate-800 dark:bg-slate-800 dark:text-slate-100 sm:text-[15px]'
                    }
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="mr-3 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-base">
                    ☠️
                  </div>
                  <div className="rounded-3xl rounded-bl-md bg-slate-100 px-5 py-4 dark:bg-slate-800">
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

      {/* Input bar with animated gradient border */}
      <div className="shrink-0 px-3 pb-4 pt-2 sm:px-6">
        <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
          <div className="group relative rounded-full">
            {/* Animated gradient border */}
            <div
              className="absolute -inset-[2px] rounded-full opacity-60 group-focus-within:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #06b6d4)',
                backgroundSize: '300% 100%',
                animation: 'brandGlow 3s linear infinite',
              }}
            />
            {/* Inner container */}
            <div className="relative flex items-center gap-2 rounded-full bg-slate-50 py-1.5 pl-5 pr-1.5 dark:bg-slate-900">
              <input
                aria-label="Message elynAI"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask elynAI anything..."
                disabled={isLoading}
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white sm:text-[15px]"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={isLoading || !input.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-800 text-white transition-all hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AiPage;
