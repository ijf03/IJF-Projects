import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <nav>
      <h4> {title} </h4>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>About Me!</Link>
      </div>
    </nav>
  );
}
