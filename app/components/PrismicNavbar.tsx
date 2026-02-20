import { createClient } from "@/prismicio";
import ClientNavbar from "./ClientNavbar";

export default async function PrismicNavbar() {
  const client = createClient();

  let settings = null;

  try {
    settings = await client.getSingle("settings");
  } catch (e) {
    console.log("No settings document yet");
    return null;
  }

  if (!settings) return null;

  return <ClientNavbar settings={settings} />;
}
