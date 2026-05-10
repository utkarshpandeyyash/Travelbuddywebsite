import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plane, Hotel, Map, Utensils, CreditCard, ChevronRight, Check, Car, UserCheck } from "lucide-react";
import { useNavigate } from "react-router";

type TripData = {
  destination: string;
  guests: number;
  days: number;
  localTransport: string;
  hotel: string;
  foodPackage: string;
  guide: string;
  price: number;
};

const STEPS = [
  { id: 'basics', title: 'The Basics', icon: Map },
  { id: 'transport', title: 'Transport', icon: Car },
  { id: 'hotel', title: 'Stay', icon: Hotel },
  { id: 'food', title: 'Dining', icon: Utensils },
  { id: 'guide', title: 'Guide', icon: UserCheck },
];

export function PlanBuilder() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [trip, setTrip] = useState<TripData>({
    destination: "Goa",
    guests: 2,
    days: 5,
    localTransport: "bike",
    hotel: "none",
    foodPackage: "none",
    guide: "none",
    price: 0
  });

  const calculateTotal = (data: TripData) => {
    let base = 0;
    // Base platform fee/service charge
    base += 500; 

    // Local Transport
    if (data.localTransport === 'cab') base += 2000 * data.days;
    if (data.localTransport === 'bike') base += 500 * data.days;
    if (data.localTransport === 'shared') base += 300 * data.days * data.guests;

    // Hotel
    if (data.hotel === 'budget') base += 1500 * data.days;
    if (data.hotel === 'boutique') base += 4000 * data.days;
    if (data.hotel === 'luxury') base += 10000 * data.days;

    // Food
    if (data.foodPackage === 'breakfast') base += 300 * data.days * data.guests;
    if (data.foodPackage === 'all-inclusive') base += 1500 * data.days * data.guests;

    // Guide
    if (data.guide === 'local') base += 1000 * data.days;
    if (data.guide === 'premium') base += 3000 * data.days;

    return base;
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(s => s + 1);
    } else {
      const finalPrice = calculateTotal(trip);
      navigate("/checkout", { state: { ...trip, price: finalPrice } });
    }
  };

  const StepIcon = STEPS[currentStep].icon;

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Progress Tracker */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-8 text-center">Plan Your India Trip</h1>
          <div className="flex items-center justify-between relative max-w-3xl mx-auto">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-10 rounded-full" />
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-indigo-600 -z-10 rounded-full transition-all duration-500" 
              style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }} 
            />
            
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isActive = i <= currentStep;
              return (
                <div key={step.id} className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-4 border-slate-50 transition-colors duration-300 ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-400'}`}>
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider hidden sm:block ${isActive ? 'text-indigo-900' : 'text-slate-400'}`}>{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 max-w-3xl mx-auto">
          <div className="p-6 md:p-10">
            <div className="flex items-center gap-4 mb-8 text-indigo-600">
              <StepIcon className="w-8 h-8" />
              <h2 className="text-2xl font-bold text-slate-900">{STEPS[currentStep].title}</h2>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Where in India?</label>
                      <select 
                        value={trip.destination}
                        onChange={e => setTrip({...trip, destination: e.target.value})}
                        className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-600 outline-none text-lg font-medium"
                      >
                        <option value="Goa">Goa</option>
                        <option value="Kerala">Kerala (Munnar/Alleppey)</option>
                        <option value="Varanasi">Varanasi, Uttar Pradesh</option>
                        <option value="Agra">Agra (Taj Mahal)</option>
                        <option value="Manali">Manali, Himachal Pradesh</option>
                        <option value="Andaman">Andaman & Nicobar</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Number of Guests</label>
                        <input 
                          type="number" 
                          min="1" 
                          max="20"
                          value={trip.guests}
                          onChange={e => setTrip({...trip, guests: parseInt(e.target.value)})}
                          className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-600 outline-none text-lg font-medium" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Days to Travel</label>
                        <input 
                          type="number" 
                          min="1" 
                          max="30"
                          value={trip.days}
                          onChange={e => setTrip({...trip, days: parseInt(e.target.value)})}
                          className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-600 outline-none text-lg font-medium" 
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-8">
                    {/* Intercity Transport - UNAVAILABLE */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Inter-city Transport</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative rounded-2xl border-2 border-slate-100 bg-slate-50 p-6 opacity-60 grayscale cursor-not-allowed">
                          <div className="absolute top-4 right-4 bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-md">
                            Not Available
                          </div>
                          <h3 className="text-lg font-bold text-slate-700 mb-2">Flight Booking</h3>
                          <p className="text-slate-500 text-sm">Domestic flight reservations are currently down for maintenance.</p>
                        </div>
                        <div className="relative rounded-2xl border-2 border-slate-100 bg-slate-50 p-6 opacity-60 grayscale cursor-not-allowed">
                          <div className="absolute top-4 right-4 bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-md">
                            Not Available
                          </div>
                          <h3 className="text-lg font-bold text-slate-700 mb-2">IRCTC Train</h3>
                          <p className="text-slate-500 text-sm">Train booking portal is temporarily unavailable.</p>
                        </div>
                      </div>
                    </div>

                    {/* Local Transport - SELECTABLE */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Local Transport (Exploring)</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <SelectCard 
                          selected={trip.localTransport === 'cab'}
                          onClick={() => setTrip({...trip, localTransport: 'cab'})}
                          title="Private Cab"
                          desc="Dedicated AC car with driver."
                          price="₹2,000/day"
                        />
                        <SelectCard 
                          selected={trip.localTransport === 'bike'}
                          onClick={() => setTrip({...trip, localTransport: 'bike'})}
                          title="Bike Rental"
                          desc="Self-drive scooter/bike."
                          price="₹500/day"
                        />
                        <SelectCard 
                          selected={trip.localTransport === 'shared'}
                          onClick={() => setTrip({...trip, localTransport: 'shared'})}
                          title="Shared Taxi"
                          desc="Economic point-to-point."
                          price="₹300/day/person"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div>
                    <p className="text-slate-500 mb-6">Select your accommodation style, or skip if you already have a place to stay.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <SelectCard 
                        selected={trip.hotel === 'none'}
                        onClick={() => setTrip({...trip, hotel: 'none'})}
                        title="No Hotel Needed"
                        desc="I will arrange my own accommodation."
                        price="₹0"
                      />
                      <SelectCard 
                        selected={trip.hotel === 'budget'}
                        onClick={() => setTrip({...trip, hotel: 'budget'})}
                        title="Budget Stay (3-Star)"
                        desc="Clean, comfortable AC rooms."
                        price="₹1,500/night"
                      />
                      <SelectCard 
                        selected={trip.hotel === 'boutique'}
                        onClick={() => setTrip({...trip, hotel: 'boutique'})}
                        title="Heritage/Boutique"
                        desc="Traditional styling with great amenities."
                        price="₹4,000/night"
                      />
                      <SelectCard 
                        selected={trip.hotel === 'luxury'}
                        onClick={() => setTrip({...trip, hotel: 'luxury'})}
                        title="5-Star Luxury"
                        desc="Premium resorts and spas."
                        price="₹10,000/night"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div>
                    <p className="text-slate-500 mb-6">Choose a dining package, or skip to explore local cafes on your own.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <SelectCard 
                        selected={trip.foodPackage === 'none'}
                        onClick={() => setTrip({...trip, foodPackage: 'none'})}
                        title="No Food Package"
                        desc="I'll manage my own meals."
                        price="₹0"
                      />
                      <SelectCard 
                        selected={trip.foodPackage === 'breakfast'}
                        onClick={() => setTrip({...trip, foodPackage: 'breakfast'})}
                        title="Breakfast Only (CP)"
                        desc="Daily hotel buffet."
                        price="₹300/day/person"
                      />
                      <SelectCard 
                        selected={trip.foodPackage === 'all-inclusive'}
                        onClick={() => setTrip({...trip, foodPackage: 'all-inclusive'})}
                        title="All-Inclusive (AP)"
                        desc="Breakfast, Lunch & Dinner."
                        price="₹1,500/day/person"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div>
                    <p className="text-slate-500 mb-6">Want a local expert to show you around? Make your choice below.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <SelectCard 
                        selected={trip.guide === 'none'}
                        onClick={() => setTrip({...trip, guide: 'none'})}
                        title="No Guide"
                        desc="I want to explore independently."
                        price="₹0"
                      />
                      <SelectCard 
                        selected={trip.guide === 'local'}
                        onClick={() => setTrip({...trip, guide: 'local'})}
                        title="Local Guide"
                        desc="Knowledgeable local for sightseeing."
                        price="₹1,000/day"
                      />
                      <SelectCard 
                        selected={trip.guide === 'premium'}
                        onClick={() => setTrip({...trip, guide: 'premium'})}
                        title="Premium Historian"
                        desc="Certified historian & private tours."
                        price="₹3,000/day"
                      />
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="bg-slate-50 p-6 md:p-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 font-medium text-center sm:text-left">
              Estimated Total: <br className="sm:hidden" />
              <span className="text-indigo-700 font-bold text-2xl">₹{calculateTotal(trip).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              {currentStep > 0 && (
                <button 
                  onClick={() => setCurrentStep(s => s - 1)}
                  className="flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  Back
                </button>
              )}
              <button 
                onClick={handleNext}
                className="flex-1 sm:flex-none px-8 py-3 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
              >
                {currentStep === STEPS.length - 1 ? 'Go to Checkout' : 'Next'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectCard({ selected, onClick, title, desc, price }: { selected: boolean, onClick: () => void, title: string, desc: string, price: string }) {
  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer rounded-2xl border-2 p-5 transition-all duration-200 relative ${
        selected 
          ? 'border-indigo-600 bg-indigo-50 shadow-md shadow-indigo-100' 
          : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50'
      }`}
    >
      {selected && (
        <div className="absolute top-3 right-3 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-white">
          <Check className="w-3 h-3" />
        </div>
      )}
      <h3 className={`text-base font-bold mb-1 ${selected ? 'text-indigo-900' : 'text-slate-900'}`}>{title}</h3>
      <p className="text-slate-500 text-xs mb-3 leading-relaxed min-h-[32px]">{desc}</p>
      <div className={`text-sm font-bold ${selected ? 'text-indigo-700' : 'text-slate-600'}`}>{price}</div>
    </div>
  );
}
