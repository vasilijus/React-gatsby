/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
 
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if ( node.internal.type === 'MarkdownRemark') {
        // console.log(JSON.stringify(node, undefined, 4 ))
        const slug = path.basename(node.fileAbsolutePath, '.md');
        // console.log(slug)
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPages } = actions;

    // 1. Get pathto template
    // 2. Get markdown DataCue
    // 3. Create new page
    const blogTemplate = path.resolve('./src/templates/blog.js');
    const response = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    response.data.allMarkdownRemark.edges.forEach( (edge) => {
        createPage({
            component: blogTemplate,
            path:  `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}