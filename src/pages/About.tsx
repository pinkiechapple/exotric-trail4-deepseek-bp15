import { Heart, Award, Users, Shield, MapPin, Target } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { COMPANY_INFO } from '../utils/contact';

export default function About() {
  return (
    <>
      <SEO
        title="About Us - Founded by Mr. Upendra Shrimali"
        description="Learn about Exotic Trails, founded in 2020 by Mr. Upendra Shrimali. We specialize in luxury, all-inclusive India tours for international travelers."
        keywords="about Exotic Trails, Upendra Shrimali, India tour company, luxury tour operator, Jodhpur tours"
      />

      <section className="pt-32 pb-20 bg-gradient-to-br from-royal-50 to-ivory-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-6">About Exotic Trails</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Crafting unforgettable journeys across Incredible India since 2020
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Exotic Trails was founded in {COMPANY_INFO.established} by <strong>{COMPANY_INFO.founder.name}</strong>, a
                passionate traveler and cultural enthusiast from Jodhpur, Rajasthan. Born and raised in the heart of royal
                Rajasthan, Mr. Shrimali grew up surrounded by magnificent forts, vibrant traditions, and stories of valor.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                His dream was to share the authentic beauty and diversity of India with travelers from around the world,
                creating experiences that go beyond typical tourist routes. What started as a small venture in Jodhpur has
                grown into a trusted name for luxury, all-inclusive India tours.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Today, Exotic Trails specializes in curating immersive journeys for foreign nationals, particularly from the
                US, UK, Europe, and Australia. Every tour is designed to showcase India's incredible heritage, landscapes, and
                hospitality, with seamless logistics from airport to airport.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Founder Mr. Upendra Shrimali"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-saffron-600 text-white p-8 rounded-xl shadow-xl max-w-xs">
                <p className="text-2xl font-bold mb-2">{COMPANY_INFO.founder.name}</p>
                <p className="text-lg opacity-90">{COMPANY_INFO.founder.title}</p>
                <p className="text-sm opacity-75 mt-2">Established {COMPANY_INFO.established}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-ivory-100 to-royal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape every journey we create
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-gradient-to-br from-saffron-500 to-saffron-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To showcase the authentic soul of India through immersive, luxury experiences that create lifelong memories
                and cultural understanding.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-gradient-to-br from-royal-500 to-royal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Passion</h3>
              <p className="text-gray-600 leading-relaxed">
                We are passionate about India's rich heritage, diverse cultures, and warm hospitality, and we love sharing it
                with the world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-gradient-to-br from-marigold-500 to-marigold-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete transparency, meticulous planning, and unwavering commitment to your comfort, safety, and satisfaction
                throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Why Choose Exotic Trails?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the world of luxury India travel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-6">
              <div className="bg-saffron-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-saffron-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Based in Jodhpur, we have deep roots in Rajasthan and extensive networks across India, giving you access to
                  authentic experiences and hidden gems.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-royal-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-royal-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">End-to-End Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  From the moment you land at the airport to your final departure, we handle every detail, allowing you to
                  simply enjoy your journey.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-marigold-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-marigold-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Luxury Accommodations</h3>
                <p className="text-gray-600 leading-relaxed">
                  We partner with heritage hotels, palace properties, and premium resorts that offer exceptional comfort and
                  authentic Indian hospitality.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-green-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Cultural Immersion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Meet local artisans, participate in traditional activities, and gain genuine insights into India's diverse
                  cultures and customs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-saffron-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-7 h-7 text-saffron-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Personalized Attention</h3>
                <p className="text-gray-600 leading-relaxed">
                  Small group sizes and customizable itineraries ensure your trip is tailored to your interests, pace, and
                  preferences.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-royal-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-royal-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock in-country assistance ensures you always have support, guidance, and peace of mind during
                  your travels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to creating your perfect India experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Senior Tour Guide',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: '15+ years experience in heritage and cultural tours',
              },
              {
                name: 'Priya Sharma',
                role: 'Trip Coordinator',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Expert in logistics and hospitality management',
              },
              {
                name: 'Amit Singh',
                role: 'Wildlife Specialist',
                image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Naturalist guide with deep knowledge of Indian wildlife',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-saffron-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-royal-900/90 to-royal-800/90" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Start Your Indian Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our team of experts craft a personalized journey that exceeds your expectations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/tours" size="lg" className="bg-saffron-600 hover:bg-saffron-700">
              Explore Our Tours
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
