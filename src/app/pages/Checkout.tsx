import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { CreditCard, MapPin, Calendar, Users, ShieldCheck, Smartphone, Landmark, FileText } from "lucide-react";
import { useForm } from "react-hook-form";

export function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const tripData = location.state || {
    destination: "Goa",
    guests: 2,
    days: 5,
    localTransport: "bike",
    hotel: "none",
    foodPackage: "none",
    guide: "none",
    price: 5500
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    // Generate an Order ID on mount
    setOrderId("ORD-" + Math.random().toString(36).substring(2, 9).toUpperCase());
  }, []);

  const onSubmit = (data: any) => {
    // Simulate saving to Database and processing payment
    setTimeout(() => {
      navigate("/receipt", { state: { trip: tripData, user: data, paymentMethod, orderId } });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Payment Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <ShieldCheck className="text-indigo-600" />
                Traveler Details
              </h2>
              <div className="text-right">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Order ID</span>
                <span className="text-sm font-mono font-bold text-slate-700">{orderId}</span>
              </div>
            </div>

            <form id="checkout-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input {...register("firstName", { required: true })} className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input {...register("lastName", { required: true })} className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" {...register("email", { required: true })} className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number (+91)</label>
                  <input type="tel" {...register("phone", { required: true })} placeholder="9876543210" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none" />
                </div>
              </div>

              <hr className="border-slate-200 my-8" />
              
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <CreditCard className="text-indigo-600 w-6 h-6" />
                Payment Method
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button type="button" onClick={() => setPaymentMethod('upi')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 font-semibold transition-colors ${paymentMethod === 'upi' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                  <Smartphone className="w-5 h-5" />
                  UPI
                </button>
                <button type="button" onClick={() => setPaymentMethod('card')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 font-semibold transition-colors ${paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                  <CreditCard className="w-5 h-5" />
                  Card
                </button>
                <button type="button" onClick={() => setPaymentMethod('netbanking')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 font-semibold transition-colors ${paymentMethod === 'netbanking' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                  <Landmark className="w-5 h-5" />
                  Net Banking
                </button>
              </div>

              {paymentMethod === 'upi' && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Enter UPI ID</label>
                  <input type="text" placeholder="username@upi" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none" />
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="space-y-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Card Number</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none font-mono" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none font-mono" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">CVV</label>
                      <input type="text" placeholder="123" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none font-mono" />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'netbanking' && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Select Bank</label>
                  <select className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none">
                    <option>HDFC Bank</option>
                    <option>State Bank of India (SBI)</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                  </select>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden sticky top-24">
            <div className="bg-indigo-950 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold mb-1">Trip Summary</h3>
                <p className="text-indigo-200 text-xs">Custom Itinerary</p>
              </div>
              <FileText className="text-indigo-400 opacity-50 w-8 h-8" />
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Destination</p>
                  <p className="font-bold text-slate-900">{tripData.destination}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Duration</p>
                  <p className="font-bold text-slate-900">{tripData.days} Days</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Travelers</p>
                  <p className="font-bold text-slate-900">{tripData.guests} People</p>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Local Transport</span>
                  <span className="font-semibold text-slate-900 capitalize">{tripData.localTransport}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Hotel</span>
                  <span className={`font-semibold capitalize ${tripData.hotel === 'none' ? 'text-slate-400' : 'text-slate-900'}`}>
                    {tripData.hotel === 'none' ? 'Not Included' : tripData.hotel}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dining</span>
                  <span className={`font-semibold capitalize ${tripData.foodPackage === 'none' ? 'text-slate-400' : 'text-slate-900'}`}>
                    {tripData.foodPackage === 'none' ? 'Not Included' : tripData.foodPackage}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Guide</span>
                  <span className={`font-semibold capitalize ${tripData.guide === 'none' ? 'text-slate-400' : 'text-slate-900'}`}>
                    {tripData.guide === 'none' ? 'Not Included' : tripData.guide}
                  </span>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Total Payment</p>
                  <p className="text-3xl font-black text-indigo-950">₹{tripData.price?.toLocaleString('en-IN')}</p>
                </div>
              </div>

              <button 
                type="submit" 
                form="checkout-form"
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-5 h-5" />
                Pay ₹{tripData.price?.toLocaleString('en-IN')}
              </button>
              
              <p className="text-xs text-center text-slate-400">Database simulated. Proceeding generates Receipt.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
