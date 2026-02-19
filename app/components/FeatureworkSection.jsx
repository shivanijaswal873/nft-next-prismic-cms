"use client";
import ImageworkSection from "./ImageworkSection";
import data from "../utils.json";

export default function Feature() {
  return (
    <ImageworkSection id="feature"
      title={data.featuredTitle}
      imagesData={data.featured}
      showTabs={false}
    />
  );
}