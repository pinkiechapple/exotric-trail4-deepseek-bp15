import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import { COMPANY_INFO } from '../utils/contact';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us - Get in Touch"
        description="Contact Exotic Trails for luxury India tour bookings. Located in Jodhpur, Rajasthan. Call +91 94142 95539 or message us on WhatsApp."
        keywords="contact Exotic Trails, India tour booking, Jodhpur tour operator, book India tour, WhatsApp tour inquiry"
      />

      <section className="pt-32 pb-20 bg-gradient-to-br from-royal-50 to-ivory-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to embark on your Indian adventure? We're here to help plan your perfect journey
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-8">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. You can also reach us directly via
                WhatsApp for immediate assistance.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-8">Contact Information</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-saffron-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-saffron-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Office</h3>
                    <p className="text-gray-600">
                      {COMPANY_INFO.address.line1}
                      <br />
                      {COMPANY_INFO.address.line2}
                      <br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
                      <br />
                      {COMPANY_INFO.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-royal-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-royal-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone & WhatsApp</h3>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-600 hover:text-saffron-600 transition-colors block mb-1">
                      {COMPANY_INFO.phone}
                    </a>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors text-sm font-medium"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-marigold-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-marigold-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a href="mailto:info@exotictrails.com" className="text-gray-600 hover:text-saffron-600 transition-colors">
                      info@exotictrails.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 7:00 PM IST
                      <br />
                      Sunday: 10:00 AM - 5:00 PM IST
                      <br />
                      <span className="text-sm text-gray-500">(24/7 WhatsApp support available)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-saffron-600 to-saffron-700 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Prefer to Talk?</h3>
                <p className="mb-6 opacity-90">
                  Our team is available to discuss your travel plans and answer any questions you may have about our tours.
                </p>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-saffron-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Start WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Find Us in Jodhpur</h2>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: '500px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.7931!2d73.024309!3d26.297285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE3JzUwLjIiTiA3M8KwMDEnMjcuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Exotic Trails Location"
              />
            </div>
            <div className="mt-6 text-center text-gray-600">
              <p>
                Located in the heart of historic Jodhpur, we're easily accessible and happy to welcome you to our office for
                a personal consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
