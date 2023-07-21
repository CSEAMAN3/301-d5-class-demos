import React from "react";

import Hero from "../../components/Hero/Hero";

import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>My Website Yo Yo</title>
        <meta name="description" content="This is the homepage for my website." />
        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        <Hero />
        <h2>this is the home page</h2>
        <p>We're looking at react router dom</p>
      </main>
    </>
  );
}
