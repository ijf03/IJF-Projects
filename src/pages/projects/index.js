import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Projects({ data }) {
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  const [sortCriteria, setSortCriteria] = useState('');

  const sortedProjects = sortCriteria
    ? projects.filter(project => project.frontmatter.stack.includes(sortCriteria))
    : projects;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>

        <div className={styles.dropdownContainer}>
          <select id="sorter" className={styles.sortDropdown} onChange={(e) => setSortCriteria(e.target.value)}>
            <option value="">All</option>
            <option value="Gatsby">Gatsby</option>
            <option value="GraphQL">GraphQL</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="React">React</option>
          </select>
        </div>

        <div className={styles.projects}>
          {sortedProjects.map((project) => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div className={styles.projectContainer}>
                {project.frontmatter.thumbnail && (
                  <GatsbyImage
                    image={getImage(project.frontmatter.thumbnail)}
                    alt={project.frontmatter.title}
                    className={styles.projectImage} // Add this className
                  />
                )}
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p style={{ paddingTop: '2rem' }}>
          Like what you see? Email me at <a href={`mailto:${contact}`}>{contact}</a> for a quote!
        </p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                breakpoints: [576, 768, 992, 1200]
              )
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
