import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import PrismicNavbar from "./components/PrismicNavbar";

export default async function Page() {
  const client = createClient();

  const page = await client.getSingle("dashboard");

  return (
    <>
      <PrismicNavbar />

      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}