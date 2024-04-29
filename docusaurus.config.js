// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Diffusion models for Histopatholgy',
  tagline: 'CVLab @ Stony Brook',
  // favicon: 'img/favicon.ico',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  // url: 'https://your-docusaurus-site.example.com',
  url: 'https://histodiffusion.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'histodiffusion', // Usually your GitHub org/user name.
  projectName: 'histodiffusion.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/histodiff-social-card-light.png',
      navbar: {
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'publicationsSidebar',
            position: 'left',
            label: 'Publications',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/cvlab-stonybrook',
            position: 'left',
          },
          {
            label: 'CVLab @ Stony Brook',
            href: 'https://www3.cs.stonybrook.edu/~cvl/',
            position: 'left',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://www3.cs.stonybrook.edu/~cvl/', label: 'CVLab @ Stony Brook University', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      // footer: {
      //  style: 'dark',
      //  links: [
      //    {
      //      title: 'Links',
      //      items: [
      //        {
      //          label: 'GitHub',
      //          href: 'https://github.com/cvlab-stonybrook',
      //        },
      //        {
      //          label: 'CVLab @ StonyBrook',
      //          href: 'https://www3.cs.stonybrook.edu/~cvl/',
      //        },
      //      ],
      //    },
      //  ],
      //  copyright: `Built with Docusaurus.`,
      //},
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
