import { useState } from 'react';
import { ChevronDown, ChevronUp, Check, X, MapPin, Calendar, DollarSign } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export default function GoldenTriangleTour() {
  const [expandedDay, setExpandedDay] = useState<number | null>(0);

  const itinerary = [
    {
      day: 1,
      title: 'Arrival in Delhi',
      accommodation: 'Luxury Delhi Hotel',
      overview: 'Welcome to India',
      description: 'Arrive at Delhi International Airport where our representative will greet you and transfer you to your hotel. Rest and prepare for your incredible journey.',
    },
    {
      day: 2,
      title: 'Delhi City Tour',
      accommodation: 'Luxury Delhi Hotel',
      overview: 'Old & New Delhi Exploration',
      description: 'Explore both Old and New Delhi. Visit Jama Masjid, India\'s largest mosque, drive past Red Fort, and visit Raj Ghat (Gandhi Memorial). In New Delhi, see India Gate, Parliament House, and Qutub Minar, a UNESCO World Heritage Site.',
      meals: 'Breakfast',
    },
    {
      day: 3,
      title: 'Delhi to Agra',
      accommodation: 'Premium Agra Hotel',
      overview: 'The City of the Taj Mahal',
      description: 'Drive to Agra (4 hours). Visit Agra Fort, a UNESCO World Heritage site with beautiful palaces and halls. In the evening, witness the spectacular sunset view of the Taj Mahal from Mehtab Bagh gardens.',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 4,
      title: 'Agra to Jaipur via Fatehpur Sikri',
      accommodation: 'Luxury Jaipur Hotel',
      overview: 'The Pink City',
      description: 'Early morning visit to the Taj Mahal at sunrise. After breakfast, drive to Jaipur with a stop at Fatehpur Sikri, the abandoned Mughal capital. Arrive in Jaipur and relax at your hotel.',
      meals: 'Breakfast',
    },
    {
      day: 5,
      title: 'Jaipur Sightseeing',
      accommodation: 'Luxury Jaipur Hotel',
      overview: 'Forts and Palaces',
      description: 'Visit the magnificent Amber Fort, enjoying an elephant ride to the fort entrance. Explore City Palace, Jantar Mantar observatory, and stop for photos at Hawa Mahal (Palace of Winds). Experience local crafts and colorful bazaars.',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 6,
      title: 'Jaipur to Delhi',
      accommodation: 'Luxury Delhi Hotel',
      overview: 'Return to Delhi',
      description: 'Morning at leisure for shopping or relaxation. Drive back to Delhi (5 hours). Evening free for last-minute shopping or exploring local markets.',
      meals: 'Breakfast',
    },
    {
      day: 7,
      title: 'Departure',
      accommodation: 'N/A',
      overview: 'Farewell India',
      description: 'Transfer to the airport for your onward journey, carrying beautiful memories of the Golden Triangle.',
      meals: 'Breakfast',
    },
  ];

  return (
    <>
      <SEO
        title="Golden Triangle Tour - 7 Days Delhi Agra Jaipur"
        description="Experience India's iconic Golden Triangle tour covering Delhi, Agra, and Jaipur. Visit the Taj Mahal, Amber Fort, and historic monuments in 7 days."
        keywords="Golden Triangle tour, Delhi Agra Jaipur tour, Taj Mahal tour, India classic tour, 7 day India tour"
      />

      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <div className="bg-saffron-600 inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4">
              7 Days / 6 Nights
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">Classic Golden Triangle</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Experience the quintessential India tour covering Delhi, Agra, and Jaipur with iconic monuments
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
                  The Golden Triangle is India's most popular tourist circuit, connecting Delhi, Agra, and Jaipur. This 7-day
                  tour covers the essence of North India, showcasing Mughal grandeur, Rajput valor, and vibrant culture.
                  Perfect for first-time visitors to India.
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 text-saffron-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Duration</p>
                      <p className="text-gray-600">7 Days / 6 Nights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-saffron-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Destinations</p>
                      <p className="text-gray-600">3 Cities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-saffron-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Starting From</p>
                      <p className="text-gray-600">$1,800 per person</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl mb-8">Detailed Day-by-Day Itinerary</h2>
                <div className="space-y-4">
                  {itinerary.map((day) => (
                    <div key={day.day} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                      <button
                        onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                        className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <span className="bg-saffron-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Day {day.day}
                            </span>
                            {day.accommodation !== 'N/A' && (
                              <span className="text-sm text-gray-600">Stay: {day.accommodation}</span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold mb-1">{day.title}</h3>
                          <p className="text-gray-600">{day.overview}</p>
                        </div>
                        {expandedDay === day.day ? (
                          <ChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
                        )}
                      </button>

                      {expandedDay === day.day && (
                        <div className="px-6 pb-6 border-t border-gray-100 pt-6">
                          <p className="text-gray-700 leading-relaxed mb-4">{day.description}</p>
                          {day.meals && (
                            <p className="text-sm text-gray-600">
                              <strong>Meals Included:</strong> {day.meals}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-saffron-600 to-saffron-700 text-white rounded-2xl p-8 mb-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Book This Tour</h3>
                  <p className="mb-6 opacity-90">
                    Experience India's most iconic circuit with expert guides and luxury comfort.
                  </p>
                  <div className="space-y-4">
                    <Button
                      href={`https://wa.me/919414295539?text=I'm interested in the Golden Triangle tour`}
                      className="w-full bg-white text-saffron-700 hover:bg-gray-100"
                    >
                      WhatsApp Us
                    </Button>
                    <Button to="/contact" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-saffron-700">
                      Send Inquiry
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Tour Highlights</h3>
                  <ul className="space-y-3">
                    {['Taj Mahal at sunrise', 'Red Fort Delhi', 'Qutub Minar', 'Agra Fort', 'Fatehpur Sikri', 'Amber Fort', 'City Palace Jaipur', 'Hawa Mahal'].map(
                      (highlight, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      )
                    )}
                  </ul>
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
