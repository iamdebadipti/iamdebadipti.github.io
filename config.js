module.exports = {
  url: `https://debadipti.me`,
  title: `Debadipti Patra`,
  author: {
    name: `Debadipti Patra`,
    bio: `I am an experienced front-end engineer based in Bangalore, now passionately learning both front and back of the web. My favorite technologies are React.js, SCSS, Gatsby, TypeScript, Node.js, GraphQL and Next.js. I am more focused on creating useful software, using the technologies I know, that will help people.`,
    contact: {
      EMAIL: { name: `hey@debadipti.me`, link: `mailto:hey@debadipti.me` },
      TWITTER: { name: `iamdebadipti`, link: `https://twitter.com/iamdebadipti` },
      GITHUB: { name: `iamdebadipti`, link: `https://github.com/iamdebadipti` },
      LINKEDIN: { name: `iamdebadipti`, link: `https://www.linkedin.com/in/iamdebadipti/` }
    }
  },
  navLinks: [
    {
      label: `Home`,
      path: `/`
    },
    {
      label: `Projects`,
      path: `/projects`
    },
    {
      label: `Contact`,
      path: `/contact`
    }
  ],
  skills: [
    { name: `JAVASCRIPT`, label: `JavaScript` },
    { name: `REACT`, label: `React` },
    { name: `GATSBY`, label: `Gatsby` },
    { name: `SCSS`, label: `SCSS` },
    { name: `REACT`, label: `React Native` },
    { name: `HTML`, label: `HTML` },
    { name: `CSS`, label: `CSS` },
    { name: `GIT`, label: `Git` },
    { name: `TYPESCRIPT`, label: `TypeScript` },
    { name: `GRAPHQL`, label: `GraphQL` },
    { name: `FIREBASE`, label: `Firebase` },
    { name: `NEXTJS`, label: `Next.JS` },
    { name: `GULP`, label: `gulp` },
    { name: `HEROKU`, label: `Heroku` },
    { name: `POSTGRESQL`, label: `PostgreSQL` },
    { name: `NODEJS`, label: `Node.JS` },
    { name: `MONGODB`, label: `MongoDB` },
    { name: `APOLLO`, label: `Apollo GraphQL` },
    { name: `NETLIFY`, label: `Netlify` }
    // { name: `ADOBEXD`, label: `Adobe XD` },
    // { name: `FIGMA`, label: `Figma` }
  ],
  projects: [
    {
      id: `noted`,
      title: `Noted`,
      description: `A minimal, simple and elegant note taking app built with React Native for Android and another web application built with React.`,
      github_link: `https://github.com/iamdebadipti/noted`,
      project_link: ``,
      tools: [`React Native`, `Firebase`, `Git`]
    },
    {
      id: `useDarkHook`,
      title: `use-dark-hook`,
      description: `A light-weight and straight forward library that adds 'dark mode' in your web app using React Hook.`,
      github_link: `https://github.com/iamdebadipti/use-dark-hook`,
      project_link: `https://www.npmjs.com/package/use-dark-hook`,
      tools: [`React`, `Babel`, `Webpack`, `Parcel`, `Git`]
    },
    {
      id: `fossbracket`,
      title: `Fossbracket`,
      description: `A blog website all about OSS - Linux, Gadgets & Softwares and Web Technologies - JavaScript, React, CSS, Node, GraphQL and so much more.`,
      github_link: `https://github.com/iamdebadipti/fossbracket`,
      project_link: `https://www.fossbracket.com/`,
      tools: [`Gatsby`, `React`, `Node.JS`, `Git`]
    }
  ]
};
