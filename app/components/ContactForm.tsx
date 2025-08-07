import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import GlassCard from './GlassCard';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const schema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  subject: yup
    .string()
    .required('Subject is required')
    .min(5, 'Subject must be at least 5 characters'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - Replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form Data:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

const contactInfo = [
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
        ),
        label: 'Email',
        value: 'rosexmee1122@gmail.com',
        link: 'mailto:rosexmee1122@gmail.com'
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
        ),
        label: 'Location',
        value: 'Cambodia, Phnom Penh',
        link: null
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        ),
        label: 'LinkedIn',
        value: 'Connect with me',
        link: 'https://www.linkedin.com/in/phon-ramy-81025a2a9/'
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.93 7.36l-1.43 6.76c-.11.5-.4.62-.81.39l-2.25-1.66-1.09 1.05c-.12.12-.23.23-.47.23l.17-2.41 4.39-3.97c.19-.17-.04-.27-.29-.1l-5.42 3.41-2.33-.73c-.51-.16-.52-.51.11-.75l9.1-3.5c.42-.16.79.1.65.74z"/>
            </svg>
        ),
        label: 'Telegram',
        value: 'RaMee',
        link: 'https://t.me/Myomeee'
    }
];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Ready to work together? Let's discuss your project and bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <GlassCard>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-white/80 mb-8">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply have a conversation about technology and development.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white hover:text-purple-300 transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Availability Status */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h4 className="text-lg font-semibold text-white">Available for job opportunities</h4>
            </div>
            <p className="text-white/80">
              Currently accepting new projects and collaborations. 
              Let's discuss how I can help bring your vision to life.
            </p>
          </GlassCard>
        </div>

        {/* Contact Form */}
        <GlassCard>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Name *
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all backdrop-blur-sm"
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all backdrop-blur-sm"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-white font-medium mb-2">
                Subject *
              </label>
              <input
                {...register('subject')}
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all backdrop-blur-sm"
                placeholder="Project discussion, collaboration, etc."
              />
              {errors.subject && (
                <p className="mt-1 text-red-400 text-sm">{errors.subject.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Message *
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all backdrop-blur-sm resize-none"
                placeholder="Tell me about your project, ideas, or just say hello..."
              />
              {errors.message && (
                <p className="mt-1 text-red-400 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-purple-600 hover:to-blue-600 focus:ring-4 focus:ring-purple-400/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <p className="text-green-300 text-center">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-300 text-center">
                  Something went wrong. Please try again or contact me directly.
                </p>
              </div>
            )}
          </form>
        </GlassCard>
      </div>
    </section>
  );
};

export default ContactForm;
