import Button from '../components/Button';
import SEO from '../components/SEO';

export default function Destinations() {
  return (
    <>
      <SEO
        title="India Destinations - Explore Incredible India"
        description="Discover India's most captivating destinations. From Royal Rajasthan to the Serene Himalayas, explore diverse regions with Exotic Trails."
        keywords="India destinations, Rajasthan travel, Golden Triangle India, Himalayan tours, South India tours, India travel guide"
      />

      <section className="pt-32 pb-20 bg-gradient-to-br from-royal-50 to-ivory-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-6">Explore India's Regions</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From royal palaces to sacred mountains, discover the diverse landscapes and rich cultures across incredible
              India
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" id="rajasthan">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Royal Rajasthan"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">The Royal Rajasthan</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Rajasthan, the "Land of Kings," is India's largest state and home to magnificent forts, opulent palaces, and
                vibrant desert landscapes. This region embodies royal heritage, with cities like Jaipur, Udaipur, Jodhpur, and
                Jaisalmer showcasing architectural marvels that tell tales of maharajas and their kingdoms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Experience the colorful culture through traditional folk music and dance, explore ancient havelis adorned with
                intricate frescoes, witness wildlife at Ranthambore, and immerse yourself in the warm hospitality of desert
                communities.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-3">Highlights:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Majestic forts of Jaipur, Jodhpur, and Jaisalmer
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Romantic city of lakes - Udaipur
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Tiger safaris in Ranthambore National Park
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Colorful markets and traditional handicrafts
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Desert experiences in the Thar
                  </li>
                </ul>
              </div>
              <Button to="/tours/royal-rajasthan">Explore Royal Rajasthan Tour</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-32" id="golden-triangle">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl mb-6">The Classic Golden Triangle</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The Golden Triangle is India's most famous tourist circuit, connecting three iconic cities: Delhi, Agra, and
                Jaipur. This route offers a perfect introduction to India's rich history, magnificent Mughal architecture, and
                vibrant Rajput heritage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From the bustling capital Delhi with its blend of ancient monuments and modern infrastructure, to Agra's
                world-famous Taj Mahal, and Jaipur's pink-hued palaces, this circuit showcases the essence of North India in a
                compact journey.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-3">Highlights:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Taj Mahal - A Wonder of the World
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Red Fort and Jama Masjid in Delhi
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Amber Fort and City Palace in Jaipur
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Mughal and Rajput architectural masterpieces
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Vibrant bazaars and street food experiences
                  </li>
                </ul>
              </div>
              <Button to="/tours/golden-triangle">Explore Golden Triangle Tour</Button>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Golden Triangle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-32" id="himalayas">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1vikram0/pexels-photo-1vikram0.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Himalayas"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">The Serene Himalayas</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The Indian Himalayas offer a spiritual and scenic escape unlike any other. Home to ancient monasteries,
                sacred temples, and breathtaking mountain vistas, this region attracts seekers of peace, adventure, and
                spiritual enlightenment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From the Tibetan influence in Dharamshala, home to the Dalai Lama, to the holy city of Rishikesh where the
                Ganges flows, and the Golden Temple in Amritsar, this region offers profound cultural and spiritual
                experiences amidst stunning natural beauty.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-3">Highlights:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Dharamshala - Tibetan culture and monasteries
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Golden Temple in Amritsar
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Rishikesh - Yoga capital of the world
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Himalayan mountain vistas and trekking
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Spiritual retreats and meditation centers
                  </li>
                </ul>
              </div>
              <Button to="/tours/himalayan-kingdoms">Explore Himalayan Tour</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center" id="south-india">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl mb-6">The Tropical South</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                South India offers a completely different flavor of Indian culture, with its lush green landscapes, ancient
                Dravidian temples, colonial heritage, and serene backwaters. The region is known for its classical arts,
                cuisine, and laid-back coastal charm.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From the magnificent rock-cut temples of Mahabalipuram to the French colonial elegance of Puducherry, the
                towering gopurams of Madurai, and the tranquil backwaters of Kerala, South India presents a harmonious blend
                of history, nature, and spirituality.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-3">Highlights:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    UNESCO-listed temples of Tamil Nadu
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Kerala's peaceful backwaters and houseboat cruises
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    French colonial heritage in Puducherry
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Traditional Kathakali dance and martial arts
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-600 mr-2">•</span>
                    Spice plantations and coastal cuisine
                  </li>
                </ul>
              </div>
              <Button to="/tours/south-india">Explore South India Tour</Button>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="South India"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-royal-900 to-royal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Explore?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let us create a customized journey that takes you through the regions that inspire you most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/tours" size="lg" className="bg-saffron-600 hover:bg-saffron-700">
              View All Tours
            </Button>
            <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
