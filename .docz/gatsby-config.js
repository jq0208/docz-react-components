const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: '前端业务组件库',
    description: '练习',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: false,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: '前端业务组件库',
        description: '练习',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components',
          templates:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\node_modules\\docz-core\\dist\\templates',
          docz:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\.docz',
          cache:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\.docz\\.cache',
          app:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\.docz\\app',
          appPackageJson:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\package.json',
          appTsConfig:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\.docz\\app\\index.html',
          db:
            'C:\\Users\\gjq\\Desktop\\docz-react-components\\docz-react-components\\.docz\\app\\db.json',
        },
        codeSandbox: false,
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
