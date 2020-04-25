module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `MonkeyBlog`,
    author: `Andres Martin Angulo`,
    description: `I write about my random thoughts and adventures.`,
    social: [
      {
        name: `instagram`,
        url: `https://instagram.com/monkeyandres`,
      },
      {
        name: `github`,
        url: `https://github.com/monkeyandres`,
      },
    ],
  },
  pathPrefix: "/blog",
}
