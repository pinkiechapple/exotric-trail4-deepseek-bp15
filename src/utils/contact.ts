export const COMPANY_INFO = {
  name: 'Exotic Trails',
  tagline: 'Crafting Unforgettable Journeys Across Incredible India',
  phone: '+91 94142 95539',
  whatsapp: '+919414295539',
  address: {
    line1: 'Hotel Haveli (The Stepwell House)',
    line2: 'Makrana Mohalla',
    city: 'Jodhpur',
    state: 'Rajasthan',
    country: 'INDIA',
  },
  founder: {
    name: 'Mr. Upendra Shrimali',
    title: 'Founder',
  },
  established: 2020,
  social: {
    instagram: 'https://instagram.com/exotictrails',
    facebook: 'https://facebook.com/exotictrails',
  },
};

export const sendWhatsAppMessage = (name: string, email: string, message: string) => {
  const text = `Hello! I'm interested in Exotic Trails tours.%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
};

export const sendEmail = (name: string, email: string, subject: string, message: string) => {
  const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
  window.location.href = `mailto:info@exotictrails.com?subject=${encodeURIComponent(subject)}&body=${body}`;
};
