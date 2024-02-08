const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `projects/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/projectpage.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
