module.exports = {
  siteMetadata: {
    title: "Moba'94 Website",
    author: 'Ebow Yawson',
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
        background_color: '#000000',
        theme_color: '#DC143C',
        display: 'minimal-ui',
        icon: 'src/images/moba logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}