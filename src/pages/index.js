import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div class="flex flex-wrap mb-4">
        <div class="w-full md:w-1/3 p-2">
          <Img fluid={data.one.childImageSharp.fluid} alt="Step 1" />
          <p class="pt-5 text-xl" />
        </div>
        <div class="w-full md:w-1/3 p-2">
          <Img fluid={data.two.childImageSharp.fluid} alt="Step 2" />
          <p class="pt-5 text-xl" />
        </div>
        <div class="w-full md:w-1/3 p-2">
          <Img fluid={data.three.childImageSharp.fluid} alt="Step 3" />
          <p class="pt-5 text-xl" />
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    one: file(relativePath: { eq: "one.jpg" }) {
      ...fluidImage
    }
    two: file(relativePath: { eq: "two.jpg" }) {
      ...fluidImage
    }
    three: file(relativePath: { eq: "three.jpg" }) {
      ...fluidImage
    }
  }
`;
