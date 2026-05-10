import { motion } from "motion/react";
import { Search, Calendar, Users, MapPin } from "lucide-react";
import { useNavigate, Link } from "react-router";

export function Home() {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/plan");
  };

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex flex-col items-center justify-center p-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwaW5kaWF8ZW58MXx8fHwxNzc4MzI0MDA4fDA&ixlib=rb-4.1.0&q=80&w=2000"
            alt="Kerala Backwaters" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo-950/50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-3xl mx-auto mt-[-5vh]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg"
          >
            Incredible India,<br/>Planned Beautifully
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-white/90 mb-10 drop-shadow-md"
          >
            Trains, flights, heritage hotels, and local food — curated in one place.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-4 md:p-3 shadow-2xl w-full max-w-4xl mx-auto"
          >
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 flex items-center gap-3 w-full px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-slate-200">
                <MapPin className="text-slate-400 w-5 h-5" />
                <div className="flex flex-col text-left w-full">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">Where in India</label>
                  <input type="text" placeholder="Search destinations" className="w-full outline-none text-slate-600 placeholder-slate-400 bg-transparent text-sm md:text-base font-medium" />
                </div>
              </div>
              
              <div className="flex-1 flex items-center gap-3 w-full px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-slate-200">
                <Calendar className="text-slate-400 w-5 h-5" />
                <div className="flex flex-col text-left w-full">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">Dates</label>
                  <input type="text" placeholder="Add dates" className="w-full outline-none text-slate-600 placeholder-slate-400 bg-transparent text-sm md:text-base font-medium" />
                </div>
              </div>

              <div className="flex-1 flex items-center gap-3 w-full px-4 py-3 md:py-2">
                <Users className="text-slate-400 w-5 h-5" />
                <div className="flex flex-col text-left w-full">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">Who</label>
                  <input type="text" placeholder="Add guests" className="w-full outline-none text-slate-600 placeholder-slate-400 bg-transparent text-sm md:text-base font-medium" />
                </div>
              </div>

              <button type="submit" className="w-full md:w-auto bg-indigo-600 text-white p-4 md:px-8 md:py-4 rounded-2xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 font-semibold shadow-lg shadow-indigo-600/30">
                <Search className="w-5 h-5" />
                <span className="md:hidden">Search</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Trending in India</h2>
              <p className="text-slate-500 text-lg">Explore the most loved cities and landscapes by our travelers.</p>
            </div>
            <button onClick={() => navigate("/plan")} className="hidden md:block text-indigo-600 font-semibold hover:text-indigo-700">See all →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DestinationCard 
              image="https://images.unsplash.com/photo-1701619879211-e03adf1993a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMGdoYXRzJTIwZ2FuZ2VzfGVufDF8fHx8MTc3ODM5Mjg4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              title="Varanasi, UP"
              price="From ₹15,000"
              rating="4.9"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaCUyMGluZGlhfGVufDF8fHx8MTc3ODMyNDAwNnww&ixlib=rb-4.1.0&q=80&w=1080"
              title="Goa, India"
              price="From ₹12,000"
              rating="4.8"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGFncmElMjBpbmRpYXxlbnwxfHx8fDE3NzgzMjQwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              title="Agra, UP"
              price="From ₹9,500"
              rating="4.9"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why choose Travel Buddy India?</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">We provide a complete end-to-end package to make your journey completely hassle-free.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FeatureCard title="Local Guides" desc="Expert curated itineraries and local secrets." icon="🗺️" />
            <FeatureCard title="Heritage Stays" desc="Handpicked accommodations from budget to palace." icon="🏨" />
            <FeatureCard title="Train & Flight" desc="Seamless IRCTC train and flight booking." icon="🚆" />
            <FeatureCard title="Authentic Food" desc="Experience the true taste of local Indian cuisine." icon="🍛" />
          </div>
        </div>
      </section>
    </div>
  );
}

function DestinationCard({ image, title, price, rating }: { image: string, title: string, price: string, rating: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group cursor-pointer rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-100"
    >
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-slate-900 shadow-sm flex items-center gap-1">
          ⭐ {rating}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-slate-500 font-medium mb-4">{price}</p>
        <Link to="/destinations" className="block w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-center group-hover:bg-indigo-50 group-hover:border-indigo-200 group-hover:text-indigo-700 transition-colors">
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

function FeatureCard({ title, desc, icon }: { title: string, desc: string, icon: string }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}
