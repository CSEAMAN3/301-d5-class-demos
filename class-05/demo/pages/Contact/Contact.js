import React from "react";

import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>My Website Contact</title>
        <meta name="description" content="This is the contact page for my website yo yo yippe yo!" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <main>
        <h2>Hey get in touch</h2>
        <p>Reach us on 0-1-2-1-do-one</p>
      </main>
    </>
  );
}
