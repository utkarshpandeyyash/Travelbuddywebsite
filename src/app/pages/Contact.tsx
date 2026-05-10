import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            How can we <span className="text-indigo-600">help you?</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Whether you have a question about a booking, need to make changes to your itinerary, or just want travel advice, our team is ready to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                <p className="text-slate-500 text-sm mb-2">We are available 24/7 for urgent trip issues.</p>
                <p className="font-bold text-indigo-700">+91 1800-123-4567</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Email Support</h3>
                <p className="text-slate-500 text-sm mb-2">We aim to reply within 4 hours.</p>
                <p className="font-bold text-indigo-700">support@travelbuddy.in</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Headquarters</h3>
                <p className="text-slate-500 text-sm">
                  123 Tech Park, Indiranagar<br/>
                  Bengaluru, Karnataka 560038<br/>
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-indigo-600" />
              Send us a message
            </h2>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-600 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Issue Type</label>
                <select className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-600 outline-none">
                  <option>Booking Modification</option>
                  <option>Cancellation & Refunds</option>
                  <option>Payment Issue</option>
                  <option>General Inquiry</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea rows={5} placeholder="How can we help you today?" className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-600 outline-none resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}