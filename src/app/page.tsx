'use client';

import { useState } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import LibraryDashboard from '@/components/Library/LibraryDashboard';
import Marketplace from '@/components/Marketplace/Marketplace';
import { useSecurity } from '@/hooks/useSecurity';
import { Library, ShoppingBag } from 'lucide-react';

function AppContent() {
  useSecurity(); // Activate global security blockers
  const [activeTab, setActiveTab] = useState<'marketplace' | 'library'>('marketplace');

  return (
    <main className="min-h-screen bg-black text-white selection:bg-gold-energy/30">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b border-white/10">
          <button
            onClick={() => setActiveTab('marketplace')}
            className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ${activeTab === 'marketplace'
              ? 'text-gold-energy border-b-2 border-gold-energy'
              : 'text-white/50 hover:text-white/80'
              }`}
          >
            <ShoppingBag className="w-5 h-5" />
            Marketplace
          </button>
          <button
            onClick={() => setActiveTab('library')}
            className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ${activeTab === 'library'
              ? 'text-gold-energy border-b-2 border-gold-energy'
              : 'text-white/50 hover:text-white/80'
              }`}
          >
            <Library className="w-5 h-5" />
            My Library
          </button>
        </div>

        {/* Content */}
        {activeTab === 'marketplace' ? <Marketplace /> : <LibraryDashboard />}
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
