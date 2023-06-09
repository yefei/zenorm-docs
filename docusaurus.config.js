// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');
const tabblocks = require('docusaurus-remark-plugin-tab-blocks');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZenORM',
  tagline: 'Node.js TypeScript Database ORM 框架',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zenorm.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yefei', // Usually your GitHub org/user name.
  projectName: 'zenorm', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/yefei/zenorm-docs/tree/master/',
          remarkPlugins: [
            [npm2yarn, {}],
            [tabblocks, {}],
          ],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yefei/zenorm-docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ZenORM',
        logo: {
          alt: 'zenorm Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/env',
            position: 'left',
            label: '文档',
          },
          {
            to: '/blog',
            label: '动态',
            position: 'left',
          },
          {
            href: 'https://zenweb.vercel.app',
            label: 'ZenWeb',
            position: 'left',
          },
          /*
          {
            href: 'https://github.com/yefei/zenweb',
            label: 'GitHub',
            position: 'right',
          },
          */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/yefei',
              },
            ],
          },
          */
        ],
        copyright: `© ${new Date().getFullYear()} ZenORM.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      /*
      algolia: {
        appId: '31C3QATM6N',
        apiKey: 'd4a50890eb3b6063d477e1bb2002a908',
        indexName: 'zenweb',
        contextualSearch: true,
      },
      */
    }),
};

module.exports = config;
