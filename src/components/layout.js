/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ( props ) => {


  return (
    <>
      <Header />

      <main>{props.children}</main>

      <Footer />
    </>
  )
}

export default Layout
