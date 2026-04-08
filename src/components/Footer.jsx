import { Droplets } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Droplets size={20} />
          <span>The Role of Technology in Development</span>
        </div>
        <p className="footer-course">
          IH Course Project — IIT Jodhpur, 2026
        </p>
        <p className="footer-note">
          A Humanities & Social Sciences exploration of the Indira Gandhi Canal
          and its role in shaping institutional infrastructure in the Thar Desert.
        </p>
        <div className="footer-divider" />
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Group Project — IIT Jodhpur. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
