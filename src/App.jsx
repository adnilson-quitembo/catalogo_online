import React from 'react';
import { BookOpen } from 'lucide-react';
import BookList from './components/BookList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <header className="bg-white shadow-sm py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
              <BookOpen size={32} className="text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
              Ombaka Bíblioteca
            </h1>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4">
        <BookList />
      </main>
    </div>
  );
}

export default App;