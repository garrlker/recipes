module.exports = {
    title: 'Recipes', // Title for the site. This will be displayed in the navbar.
    theme: '@vuepress/theme-blog',
    themeConfig: {
      // Please keep looking down to see the available options.
    },
    configureWebpack: {
        resolve: {
          alias: {
            '@image': 'blog/images/'
          }
        }
      }
  }