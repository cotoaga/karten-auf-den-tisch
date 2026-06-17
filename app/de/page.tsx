import type { Metadata } from "next";
import { de } from "@/content/de";
import { KartenPage } from "@/components/KartenPage";

export const metadata: Metadata = {
  title: "Karten auf den Tisch — Das KI-Ethik-Spiel für Teams",
  description: de.meta.description,
  alternates: {
    canonical: "/de/",
    languages: { en: "/en/", de: "/de/" },
  },
  openGraph: {
    locale: de.meta.ogLocale,
    alternateLocale: "en_US",
    title: de.meta.title,
    description: de.meta.description,
  },
};

export default function DePage() {
  return <KartenPage t={de} />;
}
