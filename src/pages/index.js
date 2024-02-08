import React from "react";
import { graphql, Link } from 'gatsby';
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Tools from "../components/Tools.js";
import Education from "../components/Education.js";

export default function Home({ data }) {
  console.log(data);

  const imageData = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <>
      <Layout>
        <section className={styles.header}>
          <div>
            <h5>Hello, my name is</h5>
            <h1>Isabelle J. Fernan</h1>
            <p>Developer</p>
            <Link className={styles.btn} to="/contact">Contact Me!</Link>
          </div>

          <div>
            <GatsbyImage
              image={imageData}
              alt="Your Image Alt Text"
              style={{ maxWidth: '80%', marginLeft: 'auto' }}
            />
          </div>
        </section>


      <section>
      <div className={styles.title}>
        <h1 className={styles.title}>TOOLS</h1>
      </div>
      <Tools/>
    </section>

     


      </Layout>
    </>
  );
}

export const query = graphql`
  query MyQuery {
    file(relativePath: {eq: "photo.png"}) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;
