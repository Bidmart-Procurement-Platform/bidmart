// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bidmart Docs',
  tagline: 'Автоматизация закупок для бизнеса',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://open.bidmart.by',
  baseUrl: '/',

  organizationName: 'Bidmart-Procurement-Platform',
  projectName: 'bidmart',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs', // адрес вида /docs/quickstart
        },
        blog: false, // <--- ОТКЛЮЧАЕМ БЛОГ
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
        title: 'Bidmart Docs',
        logo: {
          alt: 'Bidmart Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Документация',
          },
          {
            href: 'https://bidmart.by/procurement',
            label: 'Сайт Bidmart',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Быстрый старт',
                to: '/docs/quickstart',
              },
            ],
          },
          {
            title: 'Контакты',
            items: [
              {
                label: 'Bidmart',
                href: 'https://bidmart.by/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Bidmart. Все права защищены.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
