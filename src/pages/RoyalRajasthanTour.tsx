import { useState } from 'react';
import { ChevronDown, ChevronUp, Check, X, MapPin, Calendar, DollarSign } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export default function RoyalRajasthanTour() {
  const [expandedDay, setExpandedDay] = useState<number | null>(0);

  const itinerary = [
    {
      day: 1,
      title: 'Arrival in Delhi',
      accommodation: 'Four Points By Sheraton',
      overview: 'Welcome To India',
      description: 'Arrive any time; your arrival transfer is included. Our representative will meet you at the airport and escort you to your luxury hotel. Rest and recover from your journey.',
    },
    {
      day: 2,
      title: 'Delhi Sightseeing',
      accommodation: 'Four Points By Sheraton',
      overview: 'Explore Old and New Delhi',
      description: 'Set out to discover Delhi, which consists of two cities: historic Delhi and New Delhi. Delve into the narrow, winding lanes of Old Delhi, visiting the 17th-century Jama Masjid—the largest mosque in India—and the Sikh temple Gurdwara Sis Ganj Sahib. Visit Qutub Minar, a UNESCO World Heritage site. This tall minaret, built in 1192, is a stunning example of Indo-Islamic Afghan architecture.',
      meals: 'Breakfast',
    },
    {
      day: 3,
      title: 'Delhi to Agra',
      accommodation: 'Radisson Hotel',
      overview: 'The Taj Mahal & Marble Artisans',
      description: 'Travel by private transport to Agra (4-5 hours), a former capital of the Delhi sultanate and the Mughal Empire. Meet descendants of the people who built the Taj Mahal and learn about marble art & craft. Later, visit the magnificent Taj Mahal, one of the New Seven Wonders of the World. This iconic mausoleum was built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. Visit Sheroes Cafe for dinner and learn about Acid Attack Survivors.',
      meals: 'Breakfast',
    },
    {
      day: 4,
      title: 'Agra to Jaipur via Amber Fort',
      accommodation: 'Hilton Hotel',
      overview: 'Journey to the Pink City',
      description: 'After breakfast, drive to Jaipur (6 hours), the capital of Rajasthan, known as India\'s "Pink City". Upon arrival, visit Amer Fort. Explore this magnificent fort, which overlooks an artificial lake and is famous for its unique mixture of Hindu and Muslim architecture. The fort\'s sandstone walls blend with the terrain, reflecting perfectly in Maota Lake.',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 5,
      title: 'Jaipur - Where Art Meets Craft',
      accommodation: 'Hilton Hotel',
      overview: 'City Palace & Artisan Experiences',
      description: 'Start by meeting local artisans to learn about Block printing, which uses carved wooden blocks to create vibrant patterns. Learn why Jaipur is world famous for jewelry making. Visit the City Palace, a striking blend of Mughal and Rajasthani architecture. Explore its courtyards, gardens, and museum. Conclude with a guided tour of the Jantar Mantar observatory, exploring astronomical instruments dating back to 1727.',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 6,
      title: 'Jaipur Cycle Tour & Transfer to Ranthambore',
      accommodation: 'Spree Jungle Villas',
      overview: 'Explore Jaipur by Bicycle',
      description: 'Experience a Jaipur Cycle Tour through the walled city. The tour starts with Lassi and takes you through architectural wonders, spice markets, and the majestic Albert Hall Museum. Later, drive to Ranthambore (4 hours). Spend the rest of the evening at leisure.',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 7,
      title: 'Ranthambore Safari',
      accommodation: 'Spree Jungle Villas',
      overview: 'Wildlife Adventure',
      description: 'Spend the day exploring Ranthambore National Park, once the private hunting ground of the maharajas of Jaipur. Set out on morning and evening safaris with local rangers in search of monkeys, deer, sloth bears, leopards, and, if you are lucky, the elusive Bengal tiger.',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 8,
      title: 'Pushkar - The Holy City',
      accommodation: 'Camp Land Ends',
      overview: 'Sacred Lakes & Temples',
      description: 'Travel to the Hindu pilgrimage site of Pushkar (6 hours). Pushkar features a holy lake ringed by stone ghats that lead into its sacred waters. Take an orientation walk along the spectacular lakefront to the 14th-century Brahma Temple. Evening yoga class.',
      meals: 'Breakfast',
    },
    {
      day: 9,
      title: 'Pushkar to Udaipur',
      accommodation: 'Lakend Hotel',
      overview: 'Journey to the City of Lakes',
      description: 'Morning yoga class before traveling to Udaipur (6-7 hours), dubbed the City of Lakes. The most famous site is the Lake Palace, a white marble palace on an island in Lake Pichola. Relax and enjoy the evening at leisure.',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 10,
      title: 'Udaipur City Tour',
      accommodation: 'Lakend Hotel',
      overview: 'Palaces & Cultural Show',
      description: 'Discover Udaipur, once the capital of a princely state. Visit the exquisite City Palace—the largest palace complex in Rajasthan—and step into Jagdish temple. During free time, visit artisan quarters. In the evening, enjoy a boat ride on Lake Pichola followed by traditional folk music and dance.',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 11,
      title: 'Udaipur to Ghanerao',
      accommodation: 'Ghanerao Royal Castle Haveli',
      overview: 'Jain Temples & Leopard Safari',
      description: 'Morning yoga class before traveling to Ghanerao (3 hours). Visit the renowned Ranakpur Jain Temple, a 15th-century white marble temple dedicated to Lord Rishabdeva, celebrated for its intricate carvings and 1,444 unique pillars. Later in the evening, embark on a leopard safari.',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 12,
      title: 'Ghanerao to Jodhpur',
      accommodation: 'Stepwell Hotel (Hotel Haveli)',
      overview: 'The Blue City Awaits',
      description: 'Drive to Jodhpur (3 hours). On the way, visit the famous Roop Raj rug weaver who was appreciated by King Charles. Arrive in the afternoon to the second largest city in Rajasthan, often called the "Blue City". Take a short climb to reach Mehrangarh Fort, one of the largest forts in India. Wander around the Old City with its clock tower and Sadar Bazaar.',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 13,
      title: 'Jodhpur Exploration',
      accommodation: 'Stepwell Hotel (Hotel Haveli)',
      overview: 'Palaces & Monuments',
      description: 'Visit Umaid Bhawan Palace, built between 1929 and 1944 in Art Deco style, one of the world\'s largest private residences. Today it serves as a royal residence, luxury hotel, and museum. Later visit Jaswant Thada, a royal cenotaph built in 1899 as a memorial, featuring intricate marble architecture.',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 14,
      title: 'Jodhpur to Mandawa',
      accommodation: 'Legacy Mandawa',
      overview: 'Shekhawati Havelis',
      description: 'Drive to the desert town of Mandawa (4-5 hours) in the Shekhawati region. Head out on a walking tour to view the beautifully frescoed havelis and explore the old town with its painted walls and merchant houses.',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 15,
      title: 'Mandawa to Delhi',
      accommodation: 'The Pride New Delhi',
      overview: 'Return to the Capital',
      description: 'Drive back to Delhi (6 hours). Spend your final evening at leisure, perhaps doing some last-minute shopping or enjoying a farewell dinner.',
      meals: 'Breakfast',
    },
    {
      day: 16,
      title: 'Departure',
      accommodation: 'N/A',
      overview: 'Fly Home!',
      description: 'Transport to the airport for your departure flight. We hope you carry beautiful memories of Incredible India with you.',
      meals: 'Breakfast',
    },
  ];

  const inclusions = [
    'Airport arrival and departure transfers',
    '15 nights accommodation in luxury hotels and heritage properties',
    'Daily breakfast and select meals as per itinerary',
    'All transportation in private air-conditioned vehicles',
    'English-speaking expert local guides',
    'All monument entrance fees and activity costs',
    'Morning and evening safari at Ranthambore (private jeep)',
    'Boat ride on Lake Pichola',
    'Cultural show in Udaipur',
    'Cycle tour in Jaipur',
    'Yoga sessions in Pushkar, Udaipur, and Ghanerao',
    'Artisan workshops and cultural interactions',
    '24/7 on-ground support',
  ];

  const exclusions = [
    'International flights to/from India',
    'Travel insurance (highly recommended)',
    'Visa fees',
    'Meals not mentioned in the itinerary',
    'Personal expenses and gratuities',
    'Camera fees at monuments',
    'Any services not mentioned in inclusions',
  ];

  return (
    <>
      <SEO
        title="Royal Rajasthan Odyssey - 16 Day Luxury Tour"
        description="Experience the royal heritage of Rajasthan with our 16-day luxury tour. Visit Delhi, Agra, Jaipur, Udaipur, Jodhpur, and more. Wildlife safaris, palace stays, and cultural immersion."
        keywords="Rajasthan tour, luxury Rajasthan tour, India palace tour, Ranthambore safari, Udaipur tour, Jodhpur tour, 16 day India tour"
      />

      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <div className="bg-saffron-600 inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4">
              16 Days / 15 Nights
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">Royal Rajasthan Odyssey</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              An immersive journey through the land of maharajas, featuring majestic forts, vibrant culture, and wildlife
              safaris
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
                  Embark on an unforgettable 16-day journey through Royal Rajasthan, where magnificent palaces, ancient forts,
                  and vibrant traditions come alive. This comprehensive tour takes you from the bustling streets of Delhi to
                  the serene lakes of Udaipur, with wildlife safaris, cultural immersions, and luxury accommodations throughout.
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 text-saffron-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Duration</p>
                      <p className="text-gray-600">16 Days / 15 Nights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-saffron-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Destinations</p>
                      <p className="text-gray-600">8 Cities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-saffron-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Starting From</p>
                      <p className="text-gray-600">$3,500 per person</p>
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

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Check className="w-6 h-6 text-green-600 mr-2" />
                    Inclusions
                  </h3>
                  <ul className="space-y-3">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <X className="w-6 h-6 text-red-600 mr-2" />
                    Exclusions
                  </h3>
                  <ul className="space-y-3">
                    {exclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-saffron-600 to-saffron-700 text-white rounded-2xl p-8 mb-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Book This Tour</h3>
                  <p className="mb-6 opacity-90">
                    Ready to experience the magic of Royal Rajasthan? Contact us to book or customize this itinerary.
                  </p>
                  <div className="space-y-4">
                    <Button
                      href={`https://wa.me/919414295539?text=I'm interested in the Royal Rajasthan Odyssey tour`}
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
                    {[
                      'Taj Mahal at sunrise',
                      'Tiger safari at Ranthambore',
                      'Amber Fort exploration',
                      'Jaipur artisan workshops',
                      'Lake Pichola boat ride',
                      'Mehrangarh Fort visit',
                      'Desert town of Mandawa',
                      'Yoga & wellness sessions',
                    ].map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <MapPin className="w-4 h-4 text-saffron-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
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
