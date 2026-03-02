import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl sm:text-9xl font-bold text-orange/20 mb-2">
          404
        </p>
        <h1 className="text-2xl sm:text-4xl font-bold text-cream mb-4">
          Page introuvable
        </h1>
        <p className="text-cream/50 mb-8 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/">
          <Button variant="default" size="lg">
            <ArrowLeft className="w-5 h-5" />
            Retour à l&apos;accueil
          </Button>
        </Link>
      </div>
    </main>
  );
}
