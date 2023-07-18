The next thing I want to demonstrate with you is deploying the site.

First link you local react repository to github.

Go to netlify and create an account or log in.

Log in with GitHub

From the Team Overview page

Click Add new site (alternatively go to Sites and click Add new site)

Click import an existing project

Under connect to Git Provider

Click GitHub

Under Pick a Repository from GitHub

Search for the name of your repository and select it

Select:

- branch to deploy main
- base directory - leave it blank
- build command - npm run build
- publish directory - build

Click new variable

- set the key to CI and the value to false

Click Deploy site

Under set up your site:

- the cog will spin on number 1
- Under production deploys
- Production: main@HEAD published will be displayed
- under set up your site on number 1 will appear a tick
- from here you can set up a custom domain or go with the one provided.
- if you click on custom domain:
  - you can change the name
    - mine was saved to https://bobdebobpats.netlify.app/
