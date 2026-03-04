export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SYSTM.RE",
    description:
      "Agence web premium à La Réunion — branding, landing pages, MVP et SaaS.",
    url: "https://systm.re",
    image: "https://systm.re/opengraph-image",
    address: {
      "@type": "PostalAddress",
      addressRegion: "La Réunion",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "Place", name: "La Réunion" },
      { "@type": "Place", name: "France" },
    ],
    serviceType: [
      "Création de sites web",
      "Branding",
      "Développement d'applications web",
      "Landing Pages",
      "MVP",
      "SaaS",
    ],
    knowsLanguage: "fr",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Hugo M." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "SYSTM.RE a su comprendre mes besoins et créer un site à l'image de mon activité. Résultat professionnel et livraison rapide, je recommande !",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Jeremy V." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "SYSTM.RE a transformé mon idée en une vraie application fonctionnelle et design. L'équipe a parfaitement compris l'univers gaming, résultat au top !",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Idriss B." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "SYSTM.RE a conçu un portfolio qui me ressemble parfaitement. Le design est épuré, moderne et reflète exactement l'image que je voulais renvoyer.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
