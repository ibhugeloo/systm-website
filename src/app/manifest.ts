import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SYSTM.RE — Agence Web Premium",
    short_name: "SYSTM.RE",
    description:
      "Branding, landing pages et applications : nous accompagnons entrepreneurs et entreprises du concept au lancement.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f",
    theme_color: "#F77331",
  };
}
