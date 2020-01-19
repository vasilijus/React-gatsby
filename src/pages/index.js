import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';
import '../styles/index.scss';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Home2</h1>
      <p>My name is Serg</p>
      <p>About me  <Link to="./about">Youtube</Link></p>

    </Layout>
  );
};

export default IndexPage;
