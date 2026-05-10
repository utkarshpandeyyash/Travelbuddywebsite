import { useLocation, Link } from "react-router";
import { CheckCircle2, Download, Home, Ticket, FileText } from "lucide-react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export function Receipt() {
  const location = useLocation();
  const { trip, user, paymentMethod, orderId } = location.state || {
    trip: { destination: "Goa", days: 5, guests: 2, price: 5500, localTransport: 'bike', hotel: 'none', foodPackage: 'none', guide: 'none' },
    user: { firstName: "Rahul", lastName: "Sharma", email: "rahul@example.com", phone: "9876543210" },
    paymentMethod: "upi",
    orderId: "ORD-MOCK123"
  };

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4f46e5', '#818cf8', '#c7d2fe']
    });
  }, []);

  const date = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  return (
    <div className="min-h-screen bg-slate-50 py-12 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden"
      >
        <div className="bg-indigo-600 p-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-indigo-200 mb-4" />
            <h1 className="text-3xl font-bold mb-2">Payment Confirmed!</h1>
            <p className="text-indigo-100 text-lg">Your transaction was successful.</p>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-dashed border-slate-300">
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">Order ID</p>
              <p className="text-2xl font-mono font-bold text-indigo-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-500" />
                {orderId}
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-left md:text-right">
              <p className="text-sm text-slate-500 font-medium mb-1">Date & Time</p>
              <p className="font-semibold text-slate-900">{date}</p>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Ticket className="w-5 h-5 text-indigo-600" />
              Receipt Details
            </h3>
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="grid grid-cols-2 gap-y-4 text-sm">
                <div className="text-slate-500">Traveler Name</div>
                <div className="font-semibold text-right text-slate-900">{user.firstName} {user.lastName}</div>
                
                <div className="text-slate-500">Contact Info</div>
                <div className="font-semibold text-right text-slate-900">{user.email}<br/>+91 {user.phone}</div>
                
                <div className="col-span-2 my-2 border-t border-slate-200"></div>
                
                <div className="text-slate-500">Destination & Duration</div>
                <div className="font-semibold text-right text-slate-900">{trip.destination} • {trip.days} Days</div>

                <div className="text-slate-500">Local Transport</div>
                <div className="font-semibold text-right text-slate-900 capitalize">{trip.localTransport}</div>
                
                <div className="text-slate-500">Inclusions</div>
                <div className="font-semibold text-right text-slate-900 capitalize">
                  Hotel: {trip.hotel === 'none' ? 'Self-managed' : trip.hotel}<br/>
                  Food: {trip.foodPackage === 'none' ? 'Self-managed' : trip.foodPackage}<br/>
                  Guide: {trip.guide === 'none' ? 'No Guide' : trip.guide}
                </div>

                <div className="text-slate-500">Payment Method</div>
                <div className="font-semibold text-right text-slate-900 uppercase">{paymentMethod}</div>
                
                <div className="col-span-2 my-2 border-t border-slate-200"></div>
                
                <div className="text-slate-500 font-medium flex items-center">Total Amount Paid</div>
                <div className="font-black text-2xl text-indigo-600 text-right">₹{trip.price?.toLocaleString('en-IN')}</div>
              </div>
            </div>
            
            <p className="text-xs text-center text-slate-500">This receipt is auto-generated. Database records have been simulated.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-xl font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Receipt
            </button>
            <Link to="/" className="px-6 py-3 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200 flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Return Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
