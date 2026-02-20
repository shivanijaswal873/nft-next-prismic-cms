import { Content } from "@prismicio/client";
import Footer from "@/app/components/Footer";
type Props = {
  slice: Content.FooterSectionSlice;
};

export default function FooterSection({ slice }: Props) {
  return <Footer {...slice.primary} />;
}