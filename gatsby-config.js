module.exports = {
  siteMetadata: {
    title: "Moba '94' Website",
    author: 'Ebow YAwson',
    description: 'A Website to share our governing documents. Will become a full fledged website soon',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/moba logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}