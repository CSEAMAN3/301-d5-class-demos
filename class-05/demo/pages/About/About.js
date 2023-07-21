import React from "react";

import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>My Website About</title>
        <meta name="description" content="This is the about page for my website yo yo" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <main>
        <h2>Learn all about us</h2>
        <p>There is so much to know so take a seat.</p>
      </main>
    </>
  );
}
