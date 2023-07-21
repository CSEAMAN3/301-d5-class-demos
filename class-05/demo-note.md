# React Router Dom / Helmet

###### Step 1

- in the terminal run the following commands
  - npm i react-router-dom
  - npm i react-helmet-async
- Note: If you want you can just run one command:
  - npm i react-router-dom react-helmet-async
    - this will install both using one command.

###### Step 2

- Inside App.js
  - import {BrowserRouter, Routes, Route} from "react-router-dom"
  - Inside the return nest all the elements inside a BrowserRouter element.
  - then nest the elements you want to be your Route to each page component in a Routes element.
  - Then return a self closing Route element for each page.
  - the Route element takes two attributes the path and the element.
    - the path is the URL path and the element is the component/page you wish to render.

###### Step 3

Inside index.js which is inside the src directory.

- import {HelemtProvider} from "react-helmet-async"
- Nest the App component inside the HelmetProvider element

```javascript
<React.StrictMode>
  <HelmetProvider>
    <App />
  </HelmetProvider>
</React.StrictMode>
```

###### Step 4

Inside the index.html file which is inside the public folder we need to include an attribute of data-rh="true" to the meta description element

```javascript
<meta name="description" content="air bnb clone site" data-rh="true">
```

###### step 5

Include a Helmet component on each individual page. Note

- You will need to include a fragment to wrap act as your parent element in the return.

```javascript
import React from "react";

import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>My Website Contact</title>
        <meta name="description" content="This is the contact page for my website yo yo yippe yo!" />
      </Helmet>
      <main>
        <h2>Hey get in touch</h2>
        <p>Reach us on 0-1-2-1-do-one</p>
      </main>
    </>
  );
}
```

###### Step 6

Make sure you have the META SEO Inspector chrome extention installed. If you check your inspector on the pages now you will have a warning - canonical warning. To resolve this add a link inside the Helmet with the attributes of rel="canonical" and href="/about". The href attribute takes the url for the page / component you are on. /about is just an example.

```javascript
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
```
