'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Lock, User, ArrowRight, Sparkles } from 'lucide-react';
import { DataStore } from '@/lib/store';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      // Default credentials check
      if (password === 'pari') {
        DataStore.setAdminLoggedIn(true);
        router.push('/admin');
      } else {
        setError('Invalid Admin password. Try: pari');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen maroon-gradient-bg flex items-center justify-center p-4 text-ivory-50">
      
      <div className="w-full max-w-md rounded-3xl bg-maroon-900/90 border border-gold-500/40 p-6 sm:p-8 shadow-maroon backdrop-blur-xl space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-maroon-950 flex items-center justify-center mx-auto shadow-gold">
            <ShieldCheck className="w-8 h-8 stroke-[2.2]" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-ivory-50">
            Admin Portal
          </h1>
          <p className="text-xs text-gold-400 font-sans">
            SRI BALAJI TAILORING CENTRE (J. Sundari)
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-gold-400 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span>Password</span>
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-maroon-950 border border-gold-500/30 text-sm text-ivory-100 focus:border-gold-400 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-maroon-950 font-bold text-xs uppercase tracking-wider shadow-gold hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Login to Admin Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

        </form>

        <div className="pt-4 border-t border-gold-500/20 text-center">
          <p className="text-[11px] text-ivory-400">
            Default Password: <code className="text-gold-300">pari</code>
          </p>
          <a href="/" className="inline-block text-xs text-gold-400 hover:underline mt-2">
            ← Return to Main Website
          </a>
        </div>

      </div>

    </div>
  );
}
