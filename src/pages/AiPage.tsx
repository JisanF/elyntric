import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Brain, Send, User } from 'lucide-react';
import { Link } from '../router';
import AnimatedSection from '../components/AnimatedSection';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AiPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm elynAI. Ask me anything about starting your online journey — business ideas, skills to learn, where to begin, and more!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    setTimeout(() => {
      const responses = [
        "Great question! The best place to start is by identifying your interests and skills. What do you enjoy doing? What are you good at? Once you know that, we can find the right online path for you.",
        "Starting an online business doesn't need to cost money. You can begin with free tools and platforms. Focus on building an audience first — even a small one. Consistency is more important than perfection.",
        "For beginners, I recommend starting with content creation or freelancing. These require zero upfront cost and help you build skills that transfer to any online business.",
        "The key is to pick ONE thing and stick with it for at least 3 months. Most beginners fail because they jump between ideas too quickly. Pick one path, go deep, and give it time to work.",
        "Building a personal brand is one of the most valuable things you can do online. Start by sharing what you learn — even as a beginner. People relate to authenticity, not perfection.",
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-20 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto w-full py-8 flex-1 flex flex-col">
        <AnimatedSection animation="fade-up">
          <Link to="/" className="inline-flex items-center text-cyan-500 dark:text-cyan-400 hover:text-cyan-300 transition-colors mb-6 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </AnimatedSection>

        <AnimatedSection animation="scale-up">
          <div className="flex items-center justify-center mb-6 group">
            <div className="relative mr-3">
              <Brain className="w-10 h-10 text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="absolute -inset-3 rounded-full bg-cyan-400/15 dark:bg-cyan-300/15 blur-xl animate-ping pointer-events-none" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
              elynAI
            </h1>
          </div>
        </AnimatedSection>

        <div className="flex-1 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-4 md:p-6 mb-4 overflow-y-auto max-h-[55vh]">
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start gap-2 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.role === 'user'
                      ? 'bg-blue-500'
                      : 'bg-gradient-to-br from-cyan-500 to-blue-600'
                  }`}>
                    {msg.role === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Brain className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white rounded-tr-sm'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-tl-sm border border-gray-200 dark:border-gray-700'
                  }`}>
                    <p className="text-sm md:text-base leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="px-4 py-3 bg-white dark:bg-gray-800 rounded-2xl rounded-tl-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask elynAI anything..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiPage;
