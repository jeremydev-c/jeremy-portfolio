'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass =
    'w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded focus:outline-none text-sm transition-all input-themed';

  return (
    <form onSubmit={handleSubmit} className="card sm:p-6 md:p-8 max-w-2xl mx-auto">
      <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Send a message</h3>

      <div className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label htmlFor="name" className="block text-[10px] sm:text-xs font-semibold text-carbon-400 mb-1.5 sm:mb-2 uppercase tracking-wider">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[10px] sm:text-xs font-semibold text-carbon-400 mb-1.5 sm:mb-2 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-[10px] sm:text-xs font-semibold text-carbon-400 mb-1.5 sm:mb-2 uppercase tracking-wider">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className={inputClass}
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-[10px] sm:text-xs font-semibold text-carbon-400 mb-1.5 sm:mb-2 uppercase tracking-wider">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
            placeholder="Tell me about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full btn-primary gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Sent!
            </>
          ) : status === 'error' ? (
            <>
              <AlertCircle className="w-4 h-4" />
              Error — Try Again
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-xs sm:text-sm text-center"
          >
            Message sent. I&apos;ll get back to you within 24 hours.
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-xs sm:text-sm text-center"
          >
            Something went wrong. Try again or email me directly.
          </motion.div>
        )}
      </div>
    </form>
  );
}
