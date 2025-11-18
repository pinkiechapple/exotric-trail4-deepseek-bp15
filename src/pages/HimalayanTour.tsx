import { Check, MapPin, Calendar, DollarSign } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export default function HimalayanTour() {
  return (
    <>
      <SEO
        title="Himalayan Kingdoms & Spirituality - 12 Day Tour"
        description="Explore the Indian Himalayas with our 12-day spiritual journey. Visit Dharamshala, Amritsar Golden Temple, and Rishikesh yoga capital."
        keywords="Himalayan tour, Dharamshala tour, Amritsar tour, Rishikesh yoga tour, spiritual India tour"
      />

      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1vikram0/pexels-photo-1vikram0.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <div className="bg-saffron-600 inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4">
              12 Days / 11 Nights
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">Himalayan Kingdoms & Spirituality</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              A spiritual and scenic journey through monasteries, sacred sites, and breathtaking mountain landscapes
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
                  Embark on a transformative 12-day journey through the spiritual heart of the Indian Himalayas. Experience
                  Tibetan Buddhist culture in Dharamshala, witness Sikh devotion at the Golden Temple, practice yoga in
                  Rishikesh, and immerse yourself in the serene mountain landscapes that have inspired seekers for millennia.
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 text-saffron-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Duration</p>
                      <p className="text-gray-600">12 Days / 11 Nights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-saffron-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Destinations</p>
                      <p className="text-gray-600">5 Cities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-saffron-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Starting From</p>
                      <p className="text-gray-600">$2,800 per person</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl mb-6">Tour Highlights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Dalai Lama Temple in Dharamshala',
                    'Tibetan monasteries and culture',
                    'Golden Temple Amritsar at sunrise',
                    'Wagah Border ceremony',
                    'Yoga and meditation in Rishikesh',
                    'Ganges Aarti ceremony',
                    'Himalayan mountain trekking',
                    'Buddhist philosophy discussions',
                    'Authentic Tibetan cuisine',
                    'Meditation retreats',
                    'Temple visits and spiritual talks',
                    'Mountain village homestays',
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
                    <p className="font-semibold">Days 1-2: Arrival in Delhi & Transfer to Dharamshala</p>
                    <p className="text-gray-600 text-sm">Welcome, orientation, and scenic drive to the Himalayas</p>
                  </div>
                  <div className="border-l-4 border-royal-600 pl-4">
                    <p className="font-semibold">Days 3-5: Dharamshala & McLeod Ganj</p>
                    <p className="text-gray-600 text-sm">Tibetan culture, monasteries, and Dalai Lama Temple</p>
                  </div>
                  <div className="border-l-4 border-marigold-600 pl-4">
                    <p className="font-semibold">Days 6-7: Amritsar</p>
                    <p className="text-gray-600 text-sm">Golden Temple, community kitchen, Wagah Border ceremony</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <p className="font-semibold">Days 8-10: Rishikesh</p>
                    <p className="text-gray-600 text-sm">Yoga classes, Ganges Aarti, meditation, adventure activities</p>
                  </div>
                  <div className="border-l-4 border-saffron-600 pl-4">
                    <p className="font-semibold">Days 11-12: Return to Delhi & Departure</p>
                    <p className="text-gray-600 text-sm">Final reflections and departure</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-saffron-600 to-saffron-700 text-white rounded-2xl p-8 mb-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Book This Tour</h3>
                  <p className="mb-6 opacity-90">
                    Experience peace, spirituality, and natural beauty in the Indian Himalayas.
                  </p>
                  <div className="space-y-4">
                    <Button
                      href={`https://wa.me/919414295539?text=I'm interested in the Himalayan Kingdoms tour`}
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
