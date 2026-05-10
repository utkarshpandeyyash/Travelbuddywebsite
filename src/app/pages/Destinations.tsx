import { MapPin, Sun, Calendar, Info, Compass, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const DESTINATIONS = [
  {
    id: "goa",
    name: "Goa",
    tagline: "The Pearl of the Orient",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1000",
    bestTime: "Nov - Feb",
    vibe: "Beaches, Nightlife, Culture",
    description: "Famous for its pristine beaches, vibrant nightlife, and Portuguese heritage. Whether you want to party in North Goa or relax in the serene South, Goa offers a perfect tropical escape."
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000",
    bestTime: "Sep - Mar",
    vibe: "Nature, Backwaters, Ayurveda",
    description: "Experience the tranquil backwaters of Alleppey, the lush tea gardens of Munnar, and the exotic wildlife. Kerala is perfect for nature lovers and those seeking peaceful rejuvenation."
  },
  {
    id: "varanasi",
    name: "Varanasi",
    tagline: "The Spiritual Capital",
    image: "https://images.unsplash.com/photo-1701619879211-e03adf1993a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMGdoYXRzJTIwZ2FuZ2VzfGVufDF8fHx8MTc3ODM5Mjg4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bestTime: "Oct - Mar",
    vibe: "Spirituality, Culture, History",
    description: "Experience the profound spirituality of India's oldest living city. Witness the mesmerising Ganga Aarti at the ghats, take a sunrise boat ride, and explore ancient temples in the winding alleys."
  },
  {
    id: "manali",
    name: "Manali",
    tagline: "Valley of the Gods",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=1000",
    bestTime: "Oct - Jun",
    vibe: "Mountains, Snow, Adventure",
    description: "A high-altitude Himalayan resort town known for its cool climate, snow-capped peaks, and adventure sports like paragliding and skiing in Solang Valley."
  }
];

export function Destinations() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Explore <span className="text-indigo-600">Incredible India</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover the rich heritage, diverse landscapes, and vibrant cultures of our featured destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h2 className="text-3xl font-black mb-1">{dest.name}</h2>
                  <p className="text-indigo-200 font-medium">{dest.tagline}</p>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full">
                    <Calendar className="w-4 h-4 text-indigo-600" />
                    Best Time: {dest.bestTime}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full">
                    <Compass className="w-4 h-4 text-indigo-600" />
                    {dest.vibe}
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  {dest.description}
                </p>
                
                <Link 
                  to="/plan" 
                  className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors group/link"
                >
                  Plan a trip to {dest.name}
                  <ChevronRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}