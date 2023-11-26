import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "DB-GPT",
  tagline: "Revolutionizing Database Interactions with Private LLM Technology",
  favicon: "img/eosphoros.jpeg",
  url: "http://dbgpt.site",
  baseUrl: "/",
  organizationName: "eosphoros-ai",
  projectName: "DB-GPT",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      logo: {
        alt: "DB-GPT Logo",
        src: "img/dbgpt_logo.png",
        srcDark: "img/DB-GPT_LOGO_White.png",
        href: "https://dbgpt.site/",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
          to: "/docs/overview",
        },
        {
          type: "docSidebar",
          sidebarId: "use_case",
          position: "left",
          label: "Use Case",
          to: "/docs/use_cases/sql_generation_and_diagnosis",
        },
        // Please keep GitHub link to the right for consistency.

        {
          href: "https://github.com/eosphoros-ai/DB-GPT",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/erwfqcMP",
            },
            {
              label: "Dockerhub",
              href: "https://hub.docker.com/u/eosphorosai",
            },
          ],
        },
        {
          title: "Github",
          items: [
            {
              label: "Github",
              href: "https://github.com/eosphoros-ai/DB-GPT",
            },
            {
              label: "HuggingFace",
              href: "https://huggingface.co/eosphoros",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Hacker News",
              href: "https://news.ycombinator.com/item?id=36038815",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/DbGpt80100",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DB-GPT`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
