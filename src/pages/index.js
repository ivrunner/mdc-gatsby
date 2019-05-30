import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

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
          <p class="pt-5 text-xl">
            Simply Drive into the BOXMATE® with the Forklift, The angle cut arms
            with backstops with guide the seed box precisely into place.
          </p>
        </div>
        <div class="w-full md:w-1/3 p-2">
          <Img fluid={data.two.childImageSharp.fluid} alt="Step 2" />
          <p class="pt-5 text-xl">
            With one time off the forklift you can walk to the controls, make a
            quick turn of the latch, and be using the pneumatic valve to raise
            the box. With Box in the air you can rotate 180 degrees with one
            hand and have the box ready to nest.
          </p>
        </div>
        <div class="w-full md:w-1/3 p-2">
          <Img fluid={data.three.childImageSharp.fluid} alt="Step 3" />
          <p class="pt-5 text-xl">
            Now you just dump the air with the control valve and your box lowers
            into nesting position and releases itself from the latch on the way
            down. Set your lid back on the box and your ready to store it away.
          </p>
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
