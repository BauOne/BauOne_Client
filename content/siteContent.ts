export const siteContent = {
  company: {
    name: 'BauOne Ingenieurbüro Behrens',
    foundedYear: '2021',
    street: 'Im Mediapark 5',
    postalCode: '50670',
    city: 'Köln',
    phoneDisplay: '0221 77269932',
    phoneHref: 'tel:+4922177269932',
    email: 'info@bauone.de',
  },
  founder: {
    name: 'Florian Behrens',
    qualifications: [
      'M.Sc. Construction Project Management',
      'B.Eng. Bauingenieur',
      'Handwerksmeister',
    ],
    experienceSince: '2016',
    role: 'Inhaber',
    focus: 'Operative Projektverantwortung',
    email: 'info@bauone.de',
  },
  legal: {
    representative: 'Florian Behrens, M.Sc., Handwerksmeister (Inhaber)',
    registerCourt: '',
    registrationNumber: '',
    vatId: '',
  },
  seo: {
    title: 'BauOne | Projektsteuerung & Ingenieurmanagement im Hochbau',
    description:
      'BauOne ist Ihr Ingenieurbüro für Projektsteuerung und Ingenieurmanagement im Hochbau. Wir steuern Kosten, Termine und Qualität auf einer klaren, konsistenten Datengrundlage.',
    canonicalUrl: 'https://bauone.de/',
  },
  social: {
    linkedin: '#',
    instagram: '#',
    x: '#',
  },
};

export const hasPlaceholderLegalData =
  siteContent.founder.name.includes('Mustermann') ||
  siteContent.legal.registrationNumber.includes('123456') ||
  siteContent.legal.vatId.includes('987 654 321');
