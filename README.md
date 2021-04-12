# borderfree.io

Current live version: [bf-site.onrender.com](bf-site.onrender.com)

## Contents
- [Run the site locally](https://github.com/tayjoh/bf-site#run-the-site-locally)
- [Website structure](https://github.com/tayjoh/bf-site#website-structure)
- [Contributing](https://github.com/tayjoh/bf-site#contributing)

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

Pages are built using react components. For example, the content of the home page (`index.js`) is composed of components located in `src/components/page-content/home/`. The home page currently has four main content components: `Hero`, `Benefits`, `Feature`, `CTA`.  
`Benefits` and `Feature` are outdated and should probably become more generalized components like `ThreeColumn` and `SectionRightAlign`.

Main folders/files of interest:  
`src/`  
`├── assets/` Contains all images, SVGs, GIFs   
`├── components/` Contains all react components used in building the site, most of these are structural and don't need to be changed  
`├── ├── page-content/` Holds the content components for each page (e.g. `Home`). **If you want to change the content of a page, look here first.**  
`├── ├── layout.scss` Global styles for the site (i.e. colors, font, spacing) 
`├── pages/` All webpages  

## Contributing

This repository is organized using [branches (link to Github docs)](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-branches).  
The `master` branch is always deployed and available at [bf-site.onrender.com](bf-site.onrender.com). So we should always try to keep master working.  
When you want to make changes, first make sure you are up-to-date with the current version by running  
```git pull```

Then, create a new branch with  
```git checkout -b <insert_branch_name_here>``` 

Now make any changes you want.

To save and publish changes, first use `git add <file_name>` to add the changes on a file or `git add .` to add the changes for all files. Then commit the changes with a commit message using `git commit -m "your commit message"`. Finally, push (upload) your changes with `git push`.

At any time, you can switch between branches with `git checkout <branch_name>`. Keep in mind to first publish any commits.

Once your changes are ready to be integrated, open a pull request from your branch to master. Pull requests can be opened and managed on Github under "Pull Requests". The changes will then be reviewed and merged with master when ready.

