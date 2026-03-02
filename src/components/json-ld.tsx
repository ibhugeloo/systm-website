export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SYSTM.RE",
    description:
      "Agence web premium à La Réunion — branding, landing pages, MVP et SaaS.",
    url: "https://systm.re",
    areaServed: [
      { "@type": "Place", name: "La Réunion" },
      { "@type": "Place", name: "France" },
    ],
    serviceType: [
      "Création de sites web",
      "Branding",
      "Développement d'applications web",
    ],
    knowsLanguage: "fr",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
