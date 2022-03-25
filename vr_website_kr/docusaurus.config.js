// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VR웹툰',
  tagline: 'VR웹툰',
  url: 'https://vrwebtoon.belivvr.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // favicon: 'img/favicon.ico',
  favicon: 'img/Logo.webp',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'vrwebtoon_ko', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        vrwebtoon_kr: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
      navbar: {
        title: 'VR 웹툰',
        logo: {
          alt: 'VR 웹툰',
          src: 'img/Logo.webp',
          href: "https://developers.belivvr.com/"
        },
        items: [
          {
            type: 'doc',
            routeBasePath: '/doc/vrwebtoon_kr',
            backgroundColor: '#1E2759',
            docId: 'vrwebtoon_kr/intro',
            position: 'right',
            label: 'Docs',
          },
          {
            href: 'https://github.com/belivvr/comixv_docs/tree/master/vr_website_kr',
            label: 'GitHub',
            position: 'right',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
        ],
      },
    }),
};

module.exports = config;
