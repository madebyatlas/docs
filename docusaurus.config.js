import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atlas Development',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, 
  },

  url: 'https://docs.madebyatlas.dev',
  baseUrl: '/docs/intro',

  organizationName: 'madebyatlas',
  projectName: 'docs',

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
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Atlas Development Docs',
        logo: {
          alt: 'atlasdev',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/atlasdev/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
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
            title: 'Products',
            items: [
              {
                label: 'Lenny Bot',
                href: 'https://madebyatlas.dev/lenny',
              },
              {
                label: 'Ban Database Bot',
                href: 'https://madebyatlas.dev/ban-database',
              },
              {
                label: 'API',
                href: 'https://api.madebyatlas.dev',
              },
              {
                label: 'Embed Builder',
                href: 'https://embed.madebyatlas.dev',
              },
              {
                label: 'Store',
                href: 'https://madebyatlas.dev/store',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Discord Server',
                href: 'https://discord.gg/atlasdev',
              },
              {
                label: 'Status Page',
                href: 'https://status.madebyatlas.dev',
              },
              {
                label: 'Bug Reporting',
                href: 'https://trello.com/b/sIHAnvwG/atlas-development-bug-reporting',
              },
              {
                label: 'Roadmap',
                href: 'https://trello.com/b/xj8FeVaw/atlas-development-roadmap',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021-${new Date().getFullYear()} Atlas Development US`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
