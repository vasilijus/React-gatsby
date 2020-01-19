import React from "react"
import { graphql, useStaticQuery } from 'gatsby'


const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
    © {data.site.siteMetadata.author} {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}



export default Footer
