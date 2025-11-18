import { MapPin } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function Tours() {
  const tours = [
    {
      id: 'royal-rajasthan',
      title: 'Royal Rajasthan Odyssey',
      duration: '16 Days / 15 Nights',
      image: 'https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'An immersive journey through the land of maharajas, featuring majestic forts, vibrant culture, and wildlife safaris',
      destinations: ['Delhi', 'Agra', 'Ranthambore', 'Pushkar', 'Udaipur', 'Ghanerao', 'Jodhpur', 'Mandawa'],
      priceFrom: '$3,500',
    },
    {
      id: 'golden-triangle',
      title: 'Classic Golden Triangle',
      duration: '7 Days / 6 Nights',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experience the quintessential India tour covering Delhi, Agra, and Jaipur with iconic monuments and rich heritage',
      destinations: ['Delhi', 'Agra', 'Jaipur'],
      priceFrom: '$1,800',
    },
    {
      id: 'himalayan-kingdoms',
      title: 'Himalayan Kingdoms & Spirituality',
      duration: '12 Days / 11 Nights',
      image: 'https://images.pexels.com/photos/1vikram0/pexels-photo-1vikram0.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A spiritual and scenic journey through the Indian Himalayas, monasteries, and sacred sites',
      destinations: ['Delhi', 'Dharamshala', 'Amritsar', 'Rishikesh', 'Haridwar'],
      priceFrom: '$2,800',
    },
    {
      id: 'south-india',
      title: 'South India Cultural Explorer',
      duration: '14 Days / 13 Nights',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Discover ancient temples, lush backwaters, colonial heritage, and vibrant traditions of South India',
      destinations: ['Chennai', 'Mahabalipuram', 'Puducherry', 'Tanjore', 'Madurai', 'Kerala Backwaters'],
      priceFrom: '$3,200',
    },
  ];

  return (
    <>
      <SEO
        title="Tours & Itineraries"
        description="Explore our carefully curated luxury India tours. From the Royal Rajasthan Odyssey to Himalayan retreats, find your perfect Indian adventure."
        keywords="India tour packages, Rajasthan tour, Golden Triangle tour, Himalayan tours, South India tours, luxury India itineraries"
      />

      <section className="pt-32 pb-20 bg-gradient-to-br from-royal-50 to-ivory-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-6">Our India Tours</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Meticulously crafted journeys that showcase the best of India's culture, heritage, and natural beauty.
              Each tour is all-inclusive with luxury accommodations, expert guides, and seamless logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {tours.map((tour, index) => (
              <div
                key={tour.id}
                className={`grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={`relative h-96 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                  <div className="absolute top-6 right-6 bg-saffron-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                    {tour.duration}
                  </div>
                </div>

                <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <h2 className="text-3xl md:text-4xl mb-4">{tour.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{tour.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Destinations:</h3>
                    <div className="flex flex-wrap gap-2">
                      {tour.destinations.map((dest) => (
                        <span key={dest} className="flex items-center bg-ivory-100 px-3 py-1 rounded-full text-sm">
                          <MapPin className="w-4 h-4 text-saffron-600 mr-1" />
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-2xl font-bold text-saffron-700">From {tour.priceFrom}</p>
                    <p className="text-sm text-gray-500">per person (based on double occupancy)</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button to={`/tours/${tour.id}`} size="lg">
                      View Full Itinerary
                    </Button>
                    <Button to="/contact" variant="outline" size="lg">
                      Inquire Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-royal-900 to-royal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Can't Find Your Perfect Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We specialize in creating custom itineraries tailored to your interests, preferences, and travel style.
            Let us design your dream India experience.
          </p>
          <Button to="/contact" size="lg" className="bg-saffron-600 hover:bg-saffron-700">
            Request a Custom Tour
          </Button>
        </div>
      </section>
    </>
  );
}
