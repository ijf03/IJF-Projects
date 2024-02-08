// ProjectPage.js

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

// Define a styled component for the centered and larger image
const CenteredLargeImage = styled(GatsbyImage)`
  margin: 0 auto;     /* Center the image */
  max-width: 800px;   /* Set a maximum width for larger display */
`;

export default function ProjectPage({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <p>Technical Stack: {frontmatter.stack}</p>

        {/* Use the styled component for the centered and larger image */}
        {frontmatter.featuredImg && (
          <CenteredLargeImage
            image={getImage(frontmatter.featuredImg)}
            alt={frontmatter.title}
          />
        )}

        {/* Displaying the HTML content */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
        featuredImg {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
