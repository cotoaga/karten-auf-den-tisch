import { redirect } from "next/navigation";

/* Root → /de (German default as per COT-62) */
export default function RootPage() {
  redirect("/de/");
}
