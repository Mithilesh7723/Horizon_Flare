export function OrganizationSchema() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Horizon Flare',
    url: 'https://horizonflare.in',
    logo: 'https://horizonflare.in/logo.png',
    sameAs: [
      'https://twitter.com/HorizonFlare',
      'https://www.linkedin.com/company/horizon-flare',
      'https://www.facebook.com/HorizonFlare',
    ],
    description: 'India\'s premier innovation studio & cybersecurity company based in Bhopal, Madhya Pradesh, creating practical, scalable tech solutions for real-world problems.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bhopal',
      addressRegion: 'Madhya Pradesh',
      postalCode: '462001',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+917722962509',
      contactType: 'customer service',
      email: 'contact@horizonflare.in',
      availableLanguage: ['English', 'Hindi']
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Horizon Flare',
    image: 'https://horizonflare.in/banner.png',
    '@id': 'https://horizonflare.in',
    url: 'https://horizonflare.in',
    telephone: '+917722962509',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Horizon Flare',
      addressLocality: 'Bhopal',
      addressRegion: 'Madhya Pradesh',
      postalCode: '462001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.2599',
      longitude: '77.4126'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [
      'https://twitter.com/HorizonFlare',
      'https://www.linkedin.com/company/horizon-flare',
      'https://www.facebook.com/HorizonFlare'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  );
}

export function ServiceSchema() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Cybersecurity Services',
    provider: {
      '@type': 'Organization',
      name: 'Horizon Flare',
      url: 'https://horizonflare.in'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    description: 'Professional VAPT services, secure web development, and ethical hacking training across India.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR'
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
