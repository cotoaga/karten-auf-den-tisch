import type { Metadata } from "next";
import { en } from "@/content/en";
import { KartenPage } from "@/components/KartenPage";

export const metadata: Metadata = {
  title: "Cards on the Table — The AI Ethics Game for Teams",
  description: en.meta.description,
  alternates: {
    canonical: "/en/",
    languages: { de: "/de/", en: "/en/" },
  },
  openGraph: {
    locale: en.meta.ogLocale,
    alternateLocale: "de_DE",
    title: en.meta.title,
    description: en.meta.description,
  },
};

export default function EnPage() {
  return <KartenPage t={en} />;
}
