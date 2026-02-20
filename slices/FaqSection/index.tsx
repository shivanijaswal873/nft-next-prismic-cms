"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FAQSection from "@/app/components/FaqSection";

export type FaqSectionProps = SliceComponentProps<Content.FaqSectionSlice>;

export default function FaqSectionSlice({ slice }: FaqSectionProps) {
  return (
    <FAQSection {...slice.primary}
    />
  );
}
