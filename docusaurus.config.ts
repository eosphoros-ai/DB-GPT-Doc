import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
const { getVersionSync } = require("./lib/core/versionControl");

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
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
    },
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
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          includeCurrentVersion: true,
          versions: {
            current: {
              label: `${getVersionSync()}`,
              banner: "none",
            },
          },
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
      // sidebar: {
      //   hideable: true,
      //   autoCollapseCategories: true,
      // },
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "DB-GPT Logo",
        src: "img/dbgpt_logo.png",
        srcDark: "img/DB-GPT_LOGO_White.png",
        href: "https://dbgpt.site/",
      },
      items: [
        // Docs
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
          to: "/docs/overview",
        },

        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: "https://huggingface.co/eosphoros",
          position: "right",
          label: "HuggingFace",
          className: "header-huggingface-link",
        },
        {
          href: "https://www.yuque.com/eosphoros/dbgpt-docs/bex30nsv60ru0fmx",
          position: "left",
          label: "中文文档",
        },
        {
          href: "https://github.com/eosphoros-ai/community",
          position: "left",
          label: "Community",
          className: "header-community-link",
        },
        // Please keep GitHub link to the right for consistency.
        // { type: "localeDropdown", position: "right" },
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
              href: "https://discord.com/invite/7uQnPuveTY",
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
    announcementBar: {
      content:
        '⭐️ If you like DB-GPT, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/eosphoros-ai/DB-GPT">GitHub</a>! ⭐️',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
