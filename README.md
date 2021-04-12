# borderfree.io

Current live version: [bf-site.onrender.com](bf-site.onrender.com)

## Run the site locally

The site is built using [Gatsby](https://www.gatsbyjs.com/).

To set it up locally, it's best to follow [the instructions from the Gatsby tutorial](https://www.gatsbyjs.com/docs/tutorial/part-zero/) up to "Create a Gatsby site". This will install node, npm, gatsby and git, which are all necessary to run the site.

Then, to get the source code for this website, open a terminal and run

```bash
git clone https://github.com/tayjoh/bf-site.git
```

Navigate to the project folder (`bf-site`) and run 

```bash
npm install
```

You should then be able to run a local version of the site with 

```bash
gatsby develop
```

If you get any errors, try running  

```bash
npm update && npm install
```

## Website structure

`src/`  
`├── assets/` Contains all images, SVGs, GIFs   
`├── components/` Contains all react components used in building the site, most of these are structural and don't need to be changed  
`├── ├── page-content/` Holds the content components for each page (e.g. `Home`). **If you want to change the content of a page, look here first.**  
`├── ├── layout.scss` Global styles for the site  
`├── pages/` All webpages  