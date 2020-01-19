import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';
import '../styles/style.scss';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <p>My name is Serg</p>
      <p>About me  <Link to="./about">About Page</Link></p>

    </Layout>
  );
};

export default IndexPage;
