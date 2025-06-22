import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Info() {
  return (
    <div className="bg-[#f7f5f2] py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border rounded-lg shadow-sm bg-white">
        {/* Phone */}
        <div className="flex flex-col items-center py-8 border-b md:border-b-0 md:border-r">
          <PhoneIcon className="h-10 w-10 text-[#2d2d2d] mb-4" />
          <h3 className="text-lg font-semibold tracking-widest text-gray-700 mb-2">PHONE</h3>
          <div className="text-gray-600 text-base space-y-1">
            <div>+91 8707482268</div>
            <div>+91 9305281003</div>
          </div>
        </div>
        {/* Location */}
        <div className="flex flex-col items-center py-8 border-b md:border-b-0 md:border-r">
          <MapPinIcon className="h-10 w-10 text-[#2d2d2d] mb-4" />
          <h3 className="text-lg font-semibold tracking-widest text-gray-700 mb-2">LOCATION</h3>
          <div className="text-gray-600 text-base text-center">
            D-65/245, Lahartara Boulia,<br />
            Bazardih, Maheshpur, Varanasi,<br />
            Uttar Pradesh 221002
          </div>
        </div>
        {/* Email */}
        <div className="flex flex-col items-center py-8">
          <EnvelopeIcon className="h-10 w-10 text-[#2d2d2d] mb-4" />
          <h3 className="text-lg font-semibold tracking-widest text-gray-700 mb-2">EMAIL</h3>
          <div className="text-gray-600 text-base space-y-1 text-center">
            <div>Email.Ideago.Com</div>
            <div>Email.Ideago.Com</div>
          </div>
        </div>
      </div>
      {/* Google Map Embed */}
      <div className="max-w-5xl mx-auto mt-10 rounded-lg overflow-hidden shadow">
        <iframe
          title="Lahartara Varanasi Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3606.6615804175053!2d82.96506407559791!3d25.31557182689555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE4JzU2LjAiTiA4MsKwNTgnMDMuNSJF!5e0!3m2!1sen!2sin!4v1749458239974!5m2!1sen!2sin&maptype=satellite"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Footer-like Section */}
      <div className="bg-[#f7f5f2] mt-12 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-[#2d2d2d] mb-2 uppercase">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg md:text-xl text-[#2d2d2d] opacity-80">
            Discover interiors that reflect your personality, purpose, and lifestyle.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Quick Links */}
          {/* Contact Us */}
          {/* Enquire Form */}
          <div>
            <h4 className="font-semibold text-[#2d2d2d] mb-4 tracking-widest">ENQUIRE</h4>
            <form className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-1/2 px-3 py-2 border rounded bg-white text-[#2d2d2d] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-1/2 px-3 py-2 border rounded bg-white text-[#2d2d2d] focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded bg-white text-[#2d2d2d] focus:outline-none"
              />
              <textarea
                placeholder="How can we help You?"
                className="w-full px-3 py-2 border rounded bg-white text-[#2d2d2d] focus:outline-none"
                rows={2}
              />
              <button
                type="submit"
                className="w-full bg-[#2d3b4f] text-white py-2 rounded font-semibold hover:bg-[#1a2533] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}