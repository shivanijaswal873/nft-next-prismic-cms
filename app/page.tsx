import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import PrismicNavbar from "./components/PrismicNavbar";

export default async function Page() {
  const client = createClient();

  const page = await client.getByUID("dashboard", "dashboard");
  console.log("PRISMIC SLICES => ", page.data.slices);

  return (
    <>
      <PrismicNavbar />
      <SliceZone slices={page.data.slices} components={components} />
      
    </>
  );
}