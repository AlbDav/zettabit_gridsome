// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: 'Zettabit',
  siteDescription: 'Zettabit, un semplice tech blog',
  siteUrl: 'https://zettabit.it',
  titleTemplate: '%s',
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
        },
        remark: {
          plugins: [
            ['@noxify/gridsome-plugin-remark-embed', {
              'enabledProviders': ['Youtube', 'Twitter'],
            }]
          ]
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
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title', 'subtitle', 'content'],
        collections: [
          {
            typeName: 'Post',
            indexName: 'Post',
            fields: ['title', 'subtitle']
          }
        ]
      }
    },
    {
      use: "gridsome-plugin-recommender",
      options: {
        enabled: true,
        typeName: 'Post',
        referenceTypeName: 'Post',
        field: 'content',
        referenceField: 'content',
        relatedFieldName: 'related',
        referenceRelatedFieldName: 'related',
        caseSensitive: false,
        minScore: 0.3,
        maxScore: 1,
        minRelations: 7,
        maxRelations: 7,
        fillWithRandom: true,
        debug: false
      }
    }
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
      externalLinksRel: ['noopener',],
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
