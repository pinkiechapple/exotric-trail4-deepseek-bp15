import { useState } from 'react';
import { X } from 'lucide-react';
import SEO from '../components/SEO';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; category: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'palaces', label: 'Palaces & Forts' },
    { id: 'culture', label: 'Culture & People' },
    { id: 'nature', label: 'Nature & Landscapes' },
    { id: 'temples', label: 'Temples & Heritage' },
  ];

  const images = [
    {
      url: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mehrangarh Fort, Jodhpur',
      category: 'palaces',
    },
    {
      url: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Taj Mahal at Sunset',
      category: 'palaces',
    },
    {
      url: 'https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Amber Fort, Jaipur',
      category: 'palaces',
    },
    {
      url: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Traditional Artisan at Work',
      category: 'culture',
    },
    {
      url: 'https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Colorful Indian Textiles',
      category: 'culture',
    },
    {
      url: 'https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Traditional Dance Performance',
      category: 'culture',
    },
    {
      url: 'https://images.pexels.com/photos/1vikram0/pexels-photo-1vikram0.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Himalayan Mountain Vista',
      category: 'nature',
    },
    {
      url: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Kerala Backwaters',
      category: 'nature',
    },
    {
      url: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Thar Desert Landscape',
      category: 'nature',
    },
    {
      url: 'https://images.pexels.com/photos/2233389/pexels-photo-2233389.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ancient Hindu Temple',
      category: 'temples',
    },
    {
      url: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Jain Temple Architecture',
      category: 'temples',
    },
    {
      url: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Golden Temple Amritsar',
      category: 'temples',
    },
    {
      url: 'https://images.pexels.com/photos/3297502/pexels-photo-3297502.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Udaipur Lake Palace',
      category: 'palaces',
    },
    {
      url: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Rajasthani Camel Safari',
      category: 'culture',
    },
    {
      url: 'https://images.pexels.com/photos/3889743/pexels-photo-3889743.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Blue City Streets',
      category: 'culture',
    },
    {
      url: 'https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mountain Monastery',
      category: 'temples',
    },
    {
      url: 'https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sunrise over Ganges',
      category: 'nature',
    },
    {
      url: 'https://images.pexels.com/photos/3401353/pexels-photo-3401353.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Hawa Mahal Pink Palace',
      category: 'palaces',
    },
  ];

  const filteredImages = activeCategory === 'all'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <>
      <SEO
        title="Photo Gallery - India Travel Images"
        description="Explore our stunning collection of photographs from across India. View images of palaces, forts, cultural experiences, temples, and natural landscapes."
        keywords="India photos, Rajasthan images, travel photography, India gallery, palace photos, temple images"
      />

      <section className="pt-32 pb-20 bg-gradient-to-br from-royal-50 to-ivory-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-6">Photo Gallery</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A visual journey through the incredible landscapes, heritage sites, and cultural moments of India
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-saffron-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">{image.title}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-saffron-400 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-10 h-10" />
          </button>
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6">
              <p className="text-white text-2xl font-semibold">{selectedImage.title}</p>
              <p className="text-gray-400 mt-2 capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
