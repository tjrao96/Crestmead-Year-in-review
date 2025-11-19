import React, { useState } from 'react';
import { Send, Sparkles, User, Bot } from 'lucide-react';
import { getRobFordAIResponse } from '../services/geminiService';
import { ChatMessage, ChatStatus } from '../types';

const RobAI: React.FC = () => {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<ChatStatus>(ChatStatus.IDLE);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Rob's AI assistant. Ask me anything about the Crestmead 2025 market report, specifically about sold prices, rental yields, or buyer demographics." }
  ]);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || status === ChatStatus.LOADING) return;

    const userText = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setStatus(ChatStatus.LOADING);

    const response = await getRobFordAIResponse(userText);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setStatus(ChatStatus.SUCCESS);
  };

  return (
    <section id="ask-rob" className="py-24 bg-zevesto-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#78BE20 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zevesto-blue opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <Sparkles size={16} className="text-zevesto-green" />
            <span className="text-xs font-bold tracking-wider uppercase">Market Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Ask about your property</h2>
          <p className="text-gray-300 text-lg font-light">Use my AI assistant to uncover specific data points from the 2025 Flyover Report.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col h-[500px]">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-zevesto-blue">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-zevesto-green text-white' : 'bg-white text-zevesto-navy'}`}>
                   {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed shadow-md ${
                  msg.role === 'user' 
                    ? 'bg-zevesto-green text-white rounded-tr-sm' 
                    : 'bg-white/10 text-gray-100 border border-white/10 rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {status === ChatStatus.LOADING && (
               <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-white text-zevesto-navy flex items-center justify-center flex-shrink-0">
                   <Bot size={20} />
                 </div>
                 <div className="bg-white/10 p-4 rounded-2xl rounded-tl-sm flex items-center gap-2">
                   <div className="w-2 h-2 bg-zevesto-green rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-zevesto-green rounded-full animate-bounce delay-100"></div>
                   <div className="w-2 h-2 bg-zevesto-green rounded-full animate-bounce delay-200"></div>
                 </div>
               </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-4 bg-black/40 border-t border-white/10 flex gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="E.g., What is the median rent in Crestmead?"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-zevesto-green transition-colors"
            />
            <button 
              type="submit" 
              disabled={!query.trim() || status === ChatStatus.LOADING}
              className="bg-zevesto-green text-white p-3 rounded-xl hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RobAI;