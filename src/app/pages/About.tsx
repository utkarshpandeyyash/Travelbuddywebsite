import { Plane, Users, Globe2, Heart, Award, MapPin } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Redefining Travel in <span className="text-indigo-600">India</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Travel Buddy was founded with a single mission: to make exploring India's incredible diversity as seamless, affordable, and joyful as possible.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-16">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Starting from a small dorm room in Bengaluru, our founders realized that booking a complete Indian holiday required juggling a dozen different apps for trains, hotels, and local cabs.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, Travel Buddy brings everything under one roof. Whether you're craving the beaches of Goa or the spiritual ghats of Varanasi, we build complete itineraries tailored just for you.
              </p>
            </div>
            <div className="bg-slate-200 min-h-[300px] relative">
              <img 
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000" 
                alt="Taj Mahal" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Customer First</h3>
              <p className="text-sm text-slate-500">Your vacation time is precious. We guarantee 24/7 support during your entire trip.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Local First</h3>
              <p className="text-sm text-slate-500">We partner directly with local guides and businesses to ensure authentic experiences.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Transparent Pricing</h3>
              <p className="text-sm text-slate-500">No hidden fees. You see the exact breakdown of your package before you pay.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-indigo-950 rounded-3xl p-10 md:p-16 text-center text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black mb-2 text-indigo-400">50K+</div>
              <div className="text-sm text-indigo-200 font-medium">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2 text-indigo-400">100+</div>
              <div className="text-sm text-indigo-200 font-medium">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2 text-indigo-400">500+</div>
              <div className="text-sm text-indigo-200 font-medium">Local Guides</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2 text-indigo-400">4.9</div>
              <div className="text-sm text-indigo-200 font-medium">App Rating</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}