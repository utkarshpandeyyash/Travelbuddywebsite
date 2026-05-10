import { MapPin, Calendar, Smartphone, CreditCard, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function Profile() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar / User Info */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-32 bg-indigo-600"></div>
              <div className="relative z-10">
                <div className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg bg-white overflow-hidden mb-4 mt-8">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=faces&fit=crop&w=256&h=256&q=80" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Priya Singh</h2>
                <p className="text-slate-500 mb-6">priya.singh@example.com</p>
                <div className="flex justify-center gap-2 mb-8">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide">Platinum Member</span>
                </div>
                <button className="w-full py-3 border-2 border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Saved Payment Methods</h3>
              
              <div className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl mb-3">
                <div className="bg-slate-100 p-2 rounded-lg">
                  <Smartphone className="w-6 h-6 text-slate-700" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">priya@okicici</p>
                  <p className="text-sm text-slate-500">Primary UPI</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl mb-4">
                <div className="bg-slate-100 p-2 rounded-lg">
                  <CreditCard className="w-6 h-6 text-slate-700" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">HDFC Bank Debit</p>
                  <p className="text-sm text-slate-500">Ending in 1234</p>
                </div>
              </div>

              <button className="text-indigo-600 font-semibold text-sm hover:text-indigo-700">
                + Add new method
              </button>
            </div>
          </div>

          {/* Main Content / Past Bookings */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">My India Trips</h1>
            
            <div className="space-y-6">
              <BookingCard 
                status="Upcoming"
                destination="Goa, India"
                dates="Oct 15 - Oct 20, 2026"
                price="₹65,000"
                image="https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaCUyMGluZGlhfGVufDF8fHx8MTc3ODMyNDAwNnww&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <BookingCard 
                status="Completed"
                destination="Varanasi, Uttar Pradesh"
                dates="Mar 10 - Mar 18, 2025"
                price="₹85,500"
                image="https://images.unsplash.com/photo-1701619879211-e03adf1993a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMGdoYXRzJTIwZ2FuZ2VzfGVufDF8fHx8MTc3ODM5Mjg4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <BookingCard 
                status="Completed"
                destination="Agra, Uttar Pradesh"
                dates="Jan 05 - Jan 12, 2024"
                price="₹42,000"
                image="https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGFncmElMjBpbmRpYXxlbnwxfHx8fDE3NzgzMjQwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function BookingCard({ status, destination, dates, price, image }: any) {
  const isUpcoming = status === "Upcoming";
  
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
      <div className="w-full md:w-48 h-48 md:h-32 rounded-2xl overflow-hidden shrink-0">
        <img src={image} alt={destination} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className={`px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-2 inline-block ${isUpcoming ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
              {status}
            </span>
            <h3 className="text-xl font-bold text-slate-900">{destination}</h3>
          </div>
          <div className="text-right">
            <span className="font-bold text-slate-900 block">{price}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {dates}
          </div>
        </div>
        
        <div className="flex justify-end gap-3 mt-auto">
          <button className="px-4 py-2 border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 text-sm">
            View Itinerary
          </button>
          {isUpcoming && (
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 text-sm">
              Manage Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
