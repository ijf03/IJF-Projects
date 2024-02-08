import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Education from "../components/Education.js";

export default function Contact() {
  return (
    <Layout>

        <h1 className={styles.title}>Contact Me</h1>

        <div className={styles.contactInfo}>
          <ul>
            <li>
              <strong>Email:</strong> <a href="mailto:sabi.j.fernan@gmail.com">sabi.j.fernan@gmail.com</a>
            </li>
            <li>
              <strong> Phone:</strong> +63 (917) 580 0561
            </li>
            <li>
              <strong>Address:</strong> Cebu City, Philippines
            </li>
          </ul>
      
          <div className={styles.education}>
            <h1 className={styles.title}>EDUCATION</h1>
            <Education/>
          </div>


        <p className={styles.subtitle}>Feel free to connect on social media!</p>

        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/SabiFernan/" target="_blank" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/sabi_fernan/" target="_blank" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/isabelle-fernan-102b351a6/" target="_blank" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="mailto:sabi.j.fernan@gmail.com" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </Layout>
  );
}
