import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales | SYSTM.RE",
  description: "Mentions légales du site SYSTM.RE — Agence Web Premium à La Réunion.",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-cream/50 hover:text-orange transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l&apos;accueil
        </Link>

        <h1 className="text-3xl sm:text-5xl font-bold mb-12">
          Mentions <span className="text-orange">Légales</span>
        </h1>

        <div className="space-y-10 text-cream/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-cream mb-3">
              Éditeur du site
            </h2>
            <p>
              SYSTM.RE<br />
              Entrepreneur individuel<br />
              La Réunion, France<br />
              Contact : via le formulaire de réservation sur le site
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream mb-3">
              Hébergement
            </h2>
            <p>
              Vercel Inc.<br />
              440 N Barranca Avenue #4133<br />
              Covina, CA 91723, États-Unis<br />
              Site : vercel.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes,
              logo, icônes) est la propriété exclusive de SYSTM.RE, sauf mention
              contraire. Toute reproduction, représentation, modification ou
              adaptation, totale ou partielle, est interdite sans autorisation
              préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream mb-3">
              Données personnelles
            </h2>
            <p>
              Les données collectées via le formulaire de prise de rendez-vous
              (Cal.com) sont utilisées uniquement pour vous recontacter dans le
              cadre de votre demande. Elles ne sont ni vendues, ni cédées à des
              tiers. Conformément au RGPD, vous disposez d&apos;un droit
              d&apos;accès, de rectification et de suppression de vos données.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream mb-3">Cookies</h2>
            <p>
              Ce site utilise Vercel Analytics et Speed Insights pour mesurer
              l&apos;audience de manière anonyme. Ces outils ne déposent pas de
              cookies de suivi publicitaire et respectent la vie privée des
              utilisateurs.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
