// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: 'Zettabit',
  siteDescription: 'Zettabit, un semplice tech blog',
  siteUrl: 'https://zettabit.it',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
			create: true
          },
		  categories: {
			  typeName: 'Category'
		  }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/content/categories/**/*.md',
        typeName: 'Category',
        }
    },
  ],
  templates: {
    Post: '/posts/:path',
	Category: '/categories/:path',
    Tag: '/tags/:id',
  },
  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener', ],
      anchorClassName: 'icon icon-link',
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  }
}
