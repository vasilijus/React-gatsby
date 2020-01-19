/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Footer from "./footer"

import layoutStyles from "./layout.module.scss"

const Layout = ( props ) => {


  return (
    <div className={layoutStyles.container} >

      <div className={layoutStyles.container}>
        <Header />

        <main>{props.children}</main>

      </div>

      <Footer />

    </div>
  )
}

export default Layout
