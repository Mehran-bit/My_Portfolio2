import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  User,
  AtSign,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MEHRAN_PROFILE } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Please include a message with at least 10 characters.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Celebration (Non-blue palette)
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#f59e0b', '#a855f7', '#14b8a6'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MEHRAN_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient gradient light shapes (Strictly non-blue emerald & amber) */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest mb-3 border ${
            isDark
              ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
              : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          }`}>
            <Mail className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight mb-4">
            Let&apos;s Build Something{' '}
            <span className="font-stylish-italic font-bold text-emerald-500 dark:text-emerald-400">Extraordinary</span>{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 dark:from-emerald-400 dark:via-teal-300 dark:to-amber-300 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal ${
            isDark ? 'text-zinc-300' : 'text-zinc-700'
          }`}>
            &ldquo;Have a project idea or need a modern web application? Let&apos;s work together.&rdquo;
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Channels - Semantic Aside & Articles */}
          <aside className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <article className={`rounded-3xl backdrop-blur-2xl border p-6 sm:p-8 shadow-2xl relative overflow-hidden ${
              isDark
                ? 'bg-zinc-900/90 border-zinc-800 text-zinc-100'
                : 'bg-white border-zinc-200 text-zinc-900 shadow-lg'
            }`}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-500/15 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
              
              <header>
                <h3 className="text-xl font-bold font-display mb-2 flex items-center gap-2">
                  <span>Start a Conversation</span>
                  <Sparkles className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${
                  isDark ? 'text-zinc-300' : 'text-zinc-600'
                }`}>
                  Whether you have an upcoming project, a freelance engagement, or an opportunity for collaboration, my inbox is always open.
                </p>
              </header>

              {/* Email item with copy button */}
              <div className={`p-4 rounded-2xl border flex items-center justify-between gap-3 mb-6 shadow-sm ${
                isDark
                  ? 'bg-zinc-800/80 border-zinc-700'
                  : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${
                    isDark
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                      : 'bg-emerald-100 border-emerald-300 text-emerald-700'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className={`text-xs font-mono font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Direct Email</p>
                    <a
                      href={`mailto:${MEHRAN_PROFILE.email}`}
                      className="text-sm sm:text-base font-semibold hover:text-emerald-500 transition-colors truncate block"
                    >
                      {MEHRAN_PROFILE.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`p-2.5 rounded-xl border transition-all flex-shrink-0 cursor-pointer ${
                    isDark
                      ? 'bg-zinc-700/60 hover:bg-emerald-500/20 text-zinc-200 hover:text-white border-zinc-600 hover:border-emerald-400/40'
                      : 'bg-white hover:bg-emerald-50 text-zinc-700 hover:text-emerald-700 border-zinc-200 hover:border-emerald-300 shadow-sm'
                  }`}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-zinc-400 hover:text-emerald-500" />
                  )}
                </button>
              </div>

              {/* Status Badge */}
              <div className={`flex items-center gap-3 text-xs font-mono px-4 py-2.5 rounded-xl border ${
                isDark
                  ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-800'
              }`}>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                <span className="font-semibold">Response Time: Typically within 24 hours</span>
              </div>
            </article>

            {/* Social Links Cards (GitHub, LinkedIn, Fiverr) */}
            <article className={`rounded-3xl backdrop-blur-2xl border p-6 sm:p-8 shadow-2xl ${
              isDark
                ? 'bg-zinc-900/90 border-zinc-800 text-zinc-100'
                : 'bg-white border-zinc-200 text-zinc-900 shadow-lg'
            }`}>
              <h4 id="social-channels-title" className={`text-xs font-mono uppercase tracking-widest font-bold mb-4 flex items-center gap-2 ${
                isDark ? 'text-emerald-400' : 'text-emerald-700'
              }`}>
                <span>Connect Across Platforms</span>
                <span className={`h-px flex-1 ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`} />
              </h4>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  id="contact-social-github"
                  href={MEHRAN_PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all group shadow-sm ${
                    isDark
                      ? 'bg-zinc-800/80 hover:bg-zinc-800 border-zinc-700 hover:border-emerald-500/40 text-zinc-200 hover:text-white'
                      : 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200 hover:border-emerald-500/40 text-zinc-800 hover:text-zinc-950'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-700/40 flex items-center justify-center text-zinc-200 group-hover:scale-105 transition-transform">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">GitHub</p>
                      <p className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>@mehrannali57</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* LinkedIn */}
                <a
                  id="contact-social-linkedin"
                  href={MEHRAN_PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all group shadow-sm ${
                    isDark
                      ? 'bg-zinc-800/80 hover:bg-zinc-800 border-zinc-700 hover:border-emerald-500/40 text-zinc-200 hover:text-white'
                      : 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200 hover:border-emerald-500/40 text-zinc-800 hover:text-zinc-950'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">LinkedIn</p>
                      <p className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Mehran Ali</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Fiverr */}
                <a
                  id="contact-social-fiverr"
                  href={MEHRAN_PROFILE.socials.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all group shadow-sm ${
                    isDark
                      ? 'bg-zinc-800/80 hover:bg-zinc-800 border-zinc-700 hover:border-emerald-500/40 text-zinc-200 hover:text-white'
                      : 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200 hover:border-emerald-500/40 text-zinc-800 hover:text-zinc-950'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500 font-extrabold text-sm group-hover:scale-105 transition-transform">
                      fi
                    </div>
                    <div>
                      <p className="text-sm font-bold">Fiverr Freelance</p>
                      <p className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Custom Web Apps &amp; Frontend</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </article>
          </aside>

          {/* Right Column: Highly Visible Form (Prompt: visible form) */}
          <section id="contact-form-section" aria-label="Send direct message" className="lg:col-span-7">
            {/* Luminous Gradient Border Container for High Contrast Visibility */}
            <div className={`p-[2px] rounded-3xl transition-all ${
              isDark
                ? 'bg-gradient-to-br from-emerald-500 via-teal-500 to-amber-500 shadow-[0_20px_50px_rgba(16,185,129,0.2)]'
                : 'bg-gradient-to-br from-emerald-400 via-teal-400 to-amber-400 shadow-xl'
            }`}>
              <div className={`rounded-[22px] p-6 sm:p-10 relative overflow-hidden ${
                isDark ? 'bg-zinc-900' : 'bg-white'
              }`}>
                
                {/* Ambient internal light orb */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-emerald-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                {/* Form Content or Success State */}
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-12 flex flex-col items-center text-center space-y-4"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-500 mb-2 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display">
                        Message Sent Successfully!
                      </h3>
                      <p className={`text-sm sm:text-base max-w-md leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        Thank you for reaching out, <span className="text-emerald-500 font-bold">{formData.name}</span>! I have received your message and will respond to <span className="text-emerald-500 font-mono font-semibold">{formData.email}</span> within 24 hours.
                      </p>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="mt-6 px-8 py-3 rounded-full text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-500/30 cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6 relative z-10"
                    >
                      {/* Visible Form Header */}
                      <header className={`border-b pb-5 ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider mb-2 border ${
                          isDark
                            ? 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300'
                            : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                        }`}>
                          <MessageSquare className="w-3.5 h-3.5" />
                          Direct Inquiry Form
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold font-display mb-1.5">
                          Send a Direct Message
                        </h3>
                        <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          Complete the form below to initiate your project discussion or collaboration.
                        </p>
                      </header>

                      {/* Error message alert if validation fails */}
                      {errorMessage && (
                        <div className="p-4 rounded-xl bg-rose-500/20 border-2 border-rose-500/40 text-rose-500 dark:text-rose-300 text-sm flex items-center gap-3">
                          <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-500" />
                          <span className="font-medium">{errorMessage}</span>
                        </div>
                      )}

                      <fieldset className="space-y-5 border-none p-0 m-0">
                        {/* Name Input - Distinct, High Visibility */}
                        <div>
                          <label
                            htmlFor="contact-name"
                            className={`flex items-center justify-between text-xs font-mono uppercase tracking-wider font-bold mb-2 ${
                              isDark ? 'text-zinc-200' : 'text-zinc-800'
                            }`}
                          >
                            <span className="flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5 text-emerald-500" />
                              Your Full Name
                            </span>
                            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-normal normal-case">Required</span>
                          </label>
                          <div className="relative">
                            <input
                              id="contact-name"
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="e.g. John Doe / Jane Smith"
                              required
                              className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm sm:text-base font-medium transition-all shadow-inner outline-none ${
                                isDark
                                  ? 'bg-zinc-800 hover:bg-zinc-800/90 border-zinc-700 focus:border-emerald-400 focus:bg-zinc-800 focus:ring-4 focus:ring-emerald-400/20 text-white placeholder-zinc-500'
                                  : 'bg-zinc-50 hover:bg-white border-zinc-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/20 text-zinc-900 placeholder-zinc-400'
                              }`}
                            />
                          </div>
                        </div>

                        {/* Email Input - Distinct, High Visibility */}
                        <div>
                          <label
                            htmlFor="contact-email"
                            className={`flex items-center justify-between text-xs font-mono uppercase tracking-wider font-bold mb-2 ${
                              isDark ? 'text-zinc-200' : 'text-zinc-800'
                            }`}
                          >
                            <span className="flex items-center gap-1.5">
                              <AtSign className="w-3.5 h-3.5 text-teal-500" />
                              Email Address
                            </span>
                            <span className={`text-[11px] font-normal normal-case ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>We respect privacy</span>
                          </label>
                          <div className="relative">
                            <input
                              id="contact-email"
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="name@company.com"
                              required
                              className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm sm:text-base font-medium transition-all shadow-inner outline-none ${
                                isDark
                                  ? 'bg-zinc-800 hover:bg-zinc-800/90 border-zinc-700 focus:border-emerald-400 focus:bg-zinc-800 focus:ring-4 focus:ring-emerald-400/20 text-white placeholder-zinc-500'
                                  : 'bg-zinc-50 hover:bg-white border-zinc-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/20 text-zinc-900 placeholder-zinc-400'
                              }`}
                            />
                          </div>
                        </div>

                        {/* Message Textarea - Distinct, High Visibility */}
                        <div>
                          <label
                            htmlFor="contact-message"
                            className={`flex items-center justify-between text-xs font-mono uppercase tracking-wider font-bold mb-2 ${
                              isDark ? 'text-zinc-200' : 'text-zinc-800'
                            }`}
                          >
                            <span className="flex items-center gap-1.5">
                              <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
                              Project Details or Message
                            </span>
                            <span className={`text-[11px] font-normal normal-case ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Min 10 characters</span>
                          </label>
                          <div className="relative">
                            <textarea
                              id="contact-message"
                              name="message"
                              rows={5}
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Describe your project, website goals, target timeline, or tech requirements..."
                              required
                              className={`w-full p-4 rounded-xl border-2 text-sm sm:text-base font-medium transition-all shadow-inner resize-none outline-none ${
                                isDark
                                  ? 'bg-zinc-800 hover:bg-zinc-800/90 border-zinc-700 focus:border-emerald-400 focus:bg-zinc-800 focus:ring-4 focus:ring-emerald-400/20 text-white placeholder-zinc-500'
                                  : 'bg-zinc-50 hover:bg-white border-zinc-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/20 text-zinc-900 placeholder-zinc-400'
                              }`}
                            />
                          </div>
                        </div>
                      </fieldset>

                      {/* Prominent High-Visibility Action Button */}
                      <button
                        id="contact-submit-button"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-xl font-display font-bold text-base sm:text-lg text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-500 hover:via-teal-500 hover:to-amber-500 shadow-xl shadow-emerald-500/25 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer border border-white/20"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Transmitting Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 text-white" />
                            <span>Send Direct Message</span>
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </section>

        </div>

      </div>
    </section>
  );
}
