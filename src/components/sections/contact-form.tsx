"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ToastProps {
  message: string;
  open: boolean;
  type?: 'success' | 'error';
}

function Toast({ message, open, type = 'success' }: ToastProps) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="toast"
          initial={{ opacity: 0, y: 20, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: 0 }}
          transition={{ duration: 0.3 }}
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={cn(
            'fixed bottom-6 right-6 z-50 rounded-lg px-4 py-3 shadow-lg flex items-center gap-3 max-w-sm',
            type === 'success'
              ? 'bg-green-900/20 border border-green-500/30 text-green-100'
              : 'bg-red-900/20 border border-red-500/30 text-red-100'
          )}
        >
          {type === 'success' ? (
            <CheckCircle2 className="h-5 w-5 shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 shrink-0" />
          )}
          <p className="text-sm font-medium">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { cn } from '@/lib/utils';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, message: '', type: 'success' as 'success' | 'error' });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(form.action || 'https://formspree.io/f/myzynpbr', {
        method: form.method || 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setToast({ 
          open: true, 
          message: 'Message sent — thanks! I will reply within 1–3 days.', 
          type: 'success' 
        });
        form.reset();
      } else {
        setToast({ 
          open: true, 
          message: 'Something went wrong. Please try again later.', 
          type: 'error' 
        });
      }
    } catch {
      setToast({ 
        open: true, 
        message: 'Network error. Please try again.', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
      window.setTimeout(() => setToast({ open: false, message: '', type: 'success' }), 5000);
    }
  }

  return (
    <>
      <form action="https://formspree.io/f/myzynpbr" method="POST" className="space-y-5" onSubmit={handleSubmit}>
        <fieldset disabled={loading} className="space-y-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="font-medium">
              Name <span className="text-destructive" aria-label="required">*</span>
            </Label>
            <Input 
              id="name" 
              name="name" 
              type="text" 
              placeholder="Your full name" 
              required
              disabled={loading}
              autoComplete="name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="font-medium">
              Email <span className="text-destructive" aria-label="required">*</span>
            </Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="you@example.com" 
              required
              disabled={loading}
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="font-medium">
              Message <span className="text-destructive" aria-label="required">*</span>
            </Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={6} 
              placeholder="Tell me about your project or question" 
              required
              disabled={loading}
            />
          </div>

          {/* recommended Formspree fields */}
          <input type="hidden" name="_subject" value="New contact from website" />
          
          <div className="flex flex-col gap-4 pt-2">
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full sm:w-auto"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
            <p className="text-xs text-muted-foreground">
              We'll reply within 2 business days. Your information is safe with us.
            </p>
          </div>
        </fieldset>
      </form>

      <Toast open={toast.open} message={toast.message} type={toast.type as 'success' | 'error'} />
    </>
  );
}
