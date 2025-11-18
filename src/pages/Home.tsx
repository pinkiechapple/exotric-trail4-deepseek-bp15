import { MapPin, Shield, Users, Heart, Clock, Award, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'California, USA',
      text: 'Exotic Trails made our India dream come true! From the moment we landed in Delhi to our departure, everything was flawlessly organized. The cultural experiences were authentic and deeply moving.',
      rating: 5,
    },
    {
      name: 'James Williams',
      location: 'London, UK',
      text: 'Outstanding service from start to finish. Mr. Shrimali and his team curated a journey that exceeded all expectations. The attention to detail and local knowledge was exceptional.',
      rating: 5,
    },
    {
      name: 'Emma Schmidt',
      location: 'Berlin, Germany',
      text: 'We were hesitant about traveling to India, but Exotic Trails made it effortless. The luxury accommodations, expert guides, and seamless logistics allowed us to simply enjoy the magic of India.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      location: 'Sydney, Australia',
      text: 'This was not just a tour, it was a transformative experience. Every day brought new wonders, and the team ensured we felt safe, comfortable, and completely immersed in Indian culture.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <SEO
        title="Home - Luxury India Tours"
        description="Discover the soul of Incredible India with Exotic Trails. All-inclusive luxury tours curated for discerning travelers. Expert guides, authentic experiences, seamless travel from airport to airport."
        keywords="luxury India tours, India travel packages, Rajasthan tours, Golden Triangle tours, cultural India tours, premium India travel"
      />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover the Soul of <br />
            <span className="text-saffron-400">Incredible India</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed animate-slide-up">
            All-Inclusive Luxury Tours Curated for the Discerning Traveler
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button to="/tours" size="lg">
              View Our Tours
            </Button>
            <Button to="/contact" variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900">
              Get a Custom Quote
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-ivory-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">Welcome to Exotic Trails</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Founded in 2020 by <strong>Mr. Upendra Shrimali</strong>, Exotic Trails was born from a passion to share the
                magnificent diversity of India with travelers from around the world.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We specialize in creating all-inclusive, culturally immersive journeys that showcase India's rich heritage,
                breathtaking landscapes, and warm hospitality. From the moment you land at the airport to your final
                departure, every detail is meticulously planned.
              </p>
              <Button to="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px]">
              <img
                src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founder"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Explore Iconic India</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From royal palaces to sacred mountains, discover the diverse landscapes and cultures of India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'The Royal Rajasthan',
                image: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Majestic forts, desert landscapes, and vibrant culture',
              },
              {
                title: 'The Golden Triangle',
                image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Delhi, Agra, and Jaipur - the classic Indian circuit',
              },
              {
                title: 'The Serene Himalayas',
                image: 'https://images.pexels.com/photos/1vikram0/pexels-photo-1vikram0.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Spiritual retreats and breathtaking mountain vistas',
              },
              {
                title: 'The Tropical South',
                image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Lush backwaters, ancient temples, and rich traditions',
              },
            ].map((region, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-96"
              >
                <img src={region.image} alt={region.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{region.title}</h3>
                  <p className="text-gray-200 mb-4">{region.description}</p>
                  <Button to="/destinations" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 w-full">
                    Explore Region
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-royal-50 to-ivory-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Featured India Tours</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully curated journeys that showcase the best of India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Royal Rajasthan Odyssey',
                duration: '16 Days',
                image: 'https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Explore majestic forts, palaces, and the Thar Desert',
                highlights: ['Delhi & Agra', 'Jaipur & Udaipur', 'Ranthambore Safari'],
                link: '/tours/royal-rajasthan',
              },
              {
                title: 'Classic Golden Triangle',
                duration: '7 Days',
                image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Experience the iconic circuit of Delhi, Agra, and Jaipur',
                highlights: ['Taj Mahal', 'Red Fort', 'Amber Fort'],
                link: '/tours/golden-triangle',
              },
              {
                title: 'Himalayan Kingdoms',
                duration: '12 Days',
                image: 'https://images.pexels.com/photos/1vikram0/pexels-photo-1vikram0.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Spiritual journey through mountains and monasteries',
                highlights: ['Dharamshala', 'Amritsar', 'Rishikesh'],
                link: '/tours/himalayan-kingdoms',
              },
            ].map((tour, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-saffron-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {tour.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tour.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <MapPin className="w-4 h-4 text-saffron-600 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Button to={tour.link} className="w-full">
                    View Itinerary
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/tours" variant="secondary" size="lg">
              View All Tours
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">The Exotic Trails Difference</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why travelers from around the world choose us for their India journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'End-to-End Management',
                description: 'From airport pickup to departure, every moment is planned and executed flawlessly',
              },
              {
                icon: Heart,
                title: 'Authentic Cultural Immersion',
                description: 'Meet local artisans, learn traditional crafts, and experience real Indian hospitality',
              },
              {
                icon: Award,
                title: 'Luxury Accommodations',
                description: 'Stay in heritage hotels, palaces, and premium properties throughout your journey',
              },
              {
                icon: Users,
                title: 'Expert Local Guides',
                description: 'Passionate guides with deep knowledge of history, culture, and hidden gems',
              },
              {
                icon: Clock,
                title: '24/7 In-Country Support',
                description: 'Round-the-clock assistance ensuring your comfort and peace of mind',
              },
              {
                icon: MapPin,
                title: 'Customizable Itineraries',
                description: 'Tailor your journey to match your interests, pace, and preferences',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-saffron-500 to-saffron-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">What Travelers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from those who have experienced the magic of India with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-marigold-500 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="text-center">
                <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-saffron-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ivory-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Your Journey in 3 Simple Steps</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Choose Your Journey',
                  description: 'Browse our curated tours or contact us for a custom itinerary tailored to your dreams',
                },
                {
                  step: '02',
                  title: 'Customize & Confirm',
                  description: 'Work with our team to perfect every detail, then confirm your booking with confidence',
                },
                {
                  step: '03',
                  title: 'Pack Your Bags',
                  description: 'Relax knowing everything is arranged. We handle all logistics from airport to airport',
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-saffron-200 mb-4">{item.step}</div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2">
                      <ArrowRight className="w-8 h-8 text-saffron-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Visual Journey Through India</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the beauty and diversity of India through our curated photo collection
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {[
              {
                url: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Mehrangarh Fort',
              },
              {
                url: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Taj Mahal',
              },
              {
                url: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Traditional Crafts',
              },
              {
                url: 'https://images.pexels.com/photos/1vikram0/pexels-photo-1vikram0.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Himalayas',
              },
              {
                url: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Kerala Backwaters',
              },
              {
                url: 'https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Amber Fort',
              },
              {
                url: 'https://images.pexels.com/photos/2233389/pexels-photo-2233389.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Ancient Temples',
              },
              {
                url: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Desert Landscapes',
              },
            ].map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium text-sm">{image.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button to="/gallery" size="lg" variant="secondary">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      <section
        className="py-24 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-royal-900/90 to-royal-800/90" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Walk the Exotic Trails of India?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us create an unforgettable journey tailored just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg" className="bg-saffron-600 hover:bg-saffron-700">
              Contact Us Today
            </Button>
            <Button to="/tours" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Browse All Tours
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
