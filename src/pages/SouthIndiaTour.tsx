import { Check, MapPin, Calendar, DollarSign } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export default function SouthIndiaTour() {
  return (
    <>
      <SEO
        title="South India Cultural Explorer - 14 Day Tour"
        description="Discover South India's ancient temples, backwaters, and colonial heritage. 14-day luxury tour covering Chennai, Puducherry, Madurai, and Kerala."
        keywords="South India tour, Kerala backwaters, Tamil Nadu temples, Puducherry tour, Madurai tour, South India travel"
      />

      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <div className="bg-saffron-600 inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4">
              14 Days / 13 Nights
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">South India Cultural Explorer</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Discover ancient temples, lush backwaters, colonial heritage, and vibrant traditions of South India
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-ivory-50 to-royal-50 rounded-2xl p-8 mb-12">
                <h2 className="text-3xl mb-6">Tour Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Journey through the culturally rich landscape of South India over 14 unforgettable days. From the
                  magnificent Dravidian temples of Tamil Nadu to the tranquil backwaters of Kerala, experience a region where
                  ancient traditions thrive alongside natural beauty. Explore French colonial elegance, classical arts, and
                  coastal charm.
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 text-saffron-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Duration</p>
                      <p className="text-gray-600">14 Days / 13 Nights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-saffron-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Destinations</p>
                      <p className="text-gray-600">6 Cities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-saffron-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Starting From</p>
                      <p className="text-gray-600">$3,200 per person</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl mb-6">Tour Highlights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Shore Temple Mahabalipuram',
                    'Rock-cut cave temples',
                    'French Quarter Puducherry',
                    'Auroville spiritual community',
                    'Brihadeeswara Temple Tanjore',
                    'Meenakshi Temple Madurai',
                    'Kerala backwater houseboat cruise',
                    'Spice plantation visit',
                    'Kathakali dance performance',
                    'Traditional Ayurvedic treatments',
                    'Colonial architecture tours',
                    'South Indian culinary experiences',
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-ivory-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Itinerary Overview</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-saffron-600 pl-4">
                    <p className="font-semibold">Days 1-3: Chennai & Mahabalipuram</p>
                    <p className="text-gray-600 text-sm">Ancient rock temples, Shore Temple, local artisan workshops</p>
                  </div>
                  <div className="border-l-4 border-royal-600 pl-4">
                    <p className="font-semibold">Days 4-5: Puducherry</p>
                    <p className="text-gray-600 text-sm">French colonial heritage, Auroville, beach promenades</p>
                  </div>
                  <div className="border-l-4 border-marigold-600 pl-4">
                    <p className="font-semibold">Days 6-7: Tanjore & Trichy</p>
                    <p className="text-gray-600 text-sm">UNESCO temples, bronze sculptures, classical arts</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <p className="font-semibold">Days 8-9: Madurai</p>
                    <p className="text-gray-600 text-sm">Meenakshi Temple, evening ceremonies, local markets</p>
                  </div>
                  <div className="border-l-4 border-saffron-600 pl-4">
                    <p className="font-semibold">Days 10-13: Kerala Backwaters</p>
                    <p className="text-gray-600 text-sm">Houseboat cruises, spice gardens, Ayurvedic wellness, beaches</p>
                  </div>
                  <div className="border-l-4 border-royal-600 pl-4">
                    <p className="font-semibold">Day 14: Departure</p>
                    <p className="text-gray-600 text-sm">Transfer to airport with memories of tropical India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-saffron-600 to-saffron-700 text-white rounded-2xl p-8 mb-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Book This Tour</h3>
                  <p className="mb-6 opacity-90">
                    Experience the lush landscapes and rich culture of South India with us.
                  </p>
                  <div className="space-y-4">
                    <Button
                      href={`https://wa.me/919414295539?text=I'm interested in the South India Cultural Explorer tour`}
                      className="w-full bg-white text-saffron-700 hover:bg-gray-100"
                    >
                      WhatsApp Us
                    </Button>
                    <Button to="/contact" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-saffron-700">
                      Send Inquiry
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12">Have Questions? Get in Touch</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
