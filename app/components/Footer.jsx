"use client";
import "../styles/Footer.css";
import data from "../utils.json";
import { FaYoutube, FaDiscord, FaInstagram } from "react-icons/fa";

const socialIcons = {
  youtube: <FaYoutube />,
  discord: <FaDiscord />,
  instagram: <FaInstagram />,
};

export default function Footer() {
  const { brand, sections, contact, copyright } = data;

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
        <a href="#home" className="logo" >
          Psycho<span>Art</span>
        </a>
          <p>{brand.description}</p>
        </div>

        {sections.map((section, index) => (
          <div className="footer-col" key={index}>
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-col contact">
          <h4>Contact</h4>
          <p>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>

          <div className="socials">
            {contact.socials.map((social, i) => (
              <a
                href={social.url}
                key={i}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialIcons[social.name]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">{copyright}</div>
    </footer>
  );
}
