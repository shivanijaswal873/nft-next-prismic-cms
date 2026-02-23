import {
  KeyTextField,
  RichTextField,
  GroupField,
  LinkField,
  isFilled,
} from "@prismicio/client";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import "../styles/Footer.css";

type LinkItem = {
  link_label: KeyTextField;
  link_url: LinkField;
};

type SectionItem = {
  section_title: KeyTextField;
  links: GroupField<LinkItem>;
};

type FooterProps = {
  logo_text: KeyTextField;
  logo_highlight: KeyTextField;
  description: RichTextField;
  phone: KeyTextField;
  email: KeyTextField;
  copyright: KeyTextField;
  sections: GroupField<SectionItem> | null | undefined;
};

export default function Footer({
  logo_text,
  logo_highlight,
  description,
  phone,
  email,
  copyright,
  sections,
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="/" className="logo">
            {logo_text}
            <span>{logo_highlight}</span>
          </a>

          <PrismicRichText field={description} />
        </div>

        {sections?.map((section, i) => (
          <div className="footer-col" key={i}>
            <h4>{section?.section_title}</h4>

            <ul>
              {section?.links?.map((link, j) => (
                <li key={j}>
                  {link?.link_url ? (
                    <PrismicLink field={link?.link_url}>
                      {link?.link_label}
                    </PrismicLink>
                  ) : (
                    <span>{link?.link_label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-col contact">
          <h4>Contact</h4>

          {isFilled?.keyText(phone) && (
            <p>
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
          )}

          {isFilled?.keyText(email) && (
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          )}
        </div>
      </div>

      {isFilled?.keyText(copyright) && (
        <div className="footer-bottom">{copyright}</div>
      )}
    </footer>
  );
}
