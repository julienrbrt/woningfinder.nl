# woningfinder.nl

> This is the repository powering the [woningfinder.nl](https://woningfinder.nl) website.
> The live version of WoningFinder has been sunset. More information on the project and its source code is still available on [GitHub](https://github.com/julienrbrt/woningfinder).

The site is staticaly generated. This means that a deploy is required in order to update the site (for instance when a new city is added).

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Project architecture

The projects follow the achitecture of Nuxt.js.

We however use some addons:

### Modules

- _axios_ in order to make HTTP requests.
- _sitemap_ for automatically generate a sitemap.

### CSS

- _tailwindcss_ for all of our css.

### Plugins

- _vueautocomplete_ for auto completion of city names.
