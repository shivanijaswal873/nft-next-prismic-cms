"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import NFTworkSection from "@/app/components/NFTworkSection";

export type NftWorkSectionProps =
  SliceComponentProps<Content.NftWorkSectionSlice>;

export default function NftWorkSection({ slice }: NftWorkSectionProps) {
  return <NFTworkSection {...slice.primary} />;
}