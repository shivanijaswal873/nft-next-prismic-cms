"use client";
import ImageworkSection from "./ImageworkSection";
import data from "../utils.json";

export default function Collection({}) {
  return (
    <ImageworkSection
      id="collections"
      title={data.collectionTitle}
      imagesData={data.collection}
      showTabs={true}
    />
  );
}
