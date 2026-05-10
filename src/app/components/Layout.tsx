import { Outlet, Link, useLocation } from "react-router";
import { MapPin, User, Menu, X, Plane } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {!isAuthPage && (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="bg-indigo-600 p-2 rounded-xl group-hover:bg-indigo-700 transition-colors">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-indigo-950">Travel Buddy</span>
              </Link>
              
              <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium">
                <Link to="/" className="text-slate-600 hover:text-indigo-600 transition-colors">Home</Link>
                <Link to="/destinations" className="text-slate-600 hover:text-indigo-600 transition-colors">Destinations</Link>
                <Link to="/plan" className="text-slate-600 hover:text-indigo-600 transition-colors">Plan Trip</Link>
                <Link to="/about" className="text-slate-600 hover:text-indigo-600 transition-colors">About Us</Link>
                <Link to="/profile" className="text-slate-600 hover:text-indigo-600 transition-colors">Profile</Link>
              </nav>

              <div className="hidden md:flex items-center gap-4">
                <Link to="/login" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Log in</Link>
                <Link to="/signup" className="text-sm font-semibold bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">Sign up</Link>
              </div>

              <button 
                className="md:hidden p-2 text-slate-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 bg-white shadow-lg">
              <div className="px-4 pt-2 pb-4 flex flex-col gap-2">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-900 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Home</Link>
                <Link to="/destinations" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-900 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Destinations</Link>
                <Link to="/plan" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-900 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Plan Trip</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-900 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors">About Us</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-900 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Support</Link>
                <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-900 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Profile</Link>
                <div className="border-t border-slate-200 my-2 pt-4 flex gap-4 px-3">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 text-center py-3 px-4 border border-slate-300 rounded-xl text-slate-700 font-bold hover:bg-slate-50">Log in</Link>
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 text-center py-3 px-4 bg-indigo-600 rounded-xl text-white font-bold hover:bg-indigo-700 shadow-md shadow-indigo-200">Sign up</Link>
                </div>
              </div>
            </div>
          )}
        </header>
      )}

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {!isAuthPage && (
        <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Plane className="w-6 h-6 text-indigo-600" />
              <span className="font-bold text-lg text-indigo-950">Travel Buddy</span>
            </div>
            <p className="text-slate-500 text-sm">© 2026 Travel Buddy Inc. All rights reserved.</p>
            <div className="flex gap-6 text-sm font-medium text-slate-500">
              <Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link>
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
              <Link to="/contact" className="hover:text-indigo-600 transition-colors">Support</Link>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
