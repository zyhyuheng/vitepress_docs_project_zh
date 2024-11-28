import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: 'VitePress',
  description: '基于 Vite 和 Vue 的静态站点生成器',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Example', link: '/en/example' }
        ],
        sidebar: [
          {
            items: [
              { text: 'Example', link: '/en/example' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    nav: [
      { text: '示例', link: '/example' }
    ],

    sidebar: [
      {
        items: [
          { text: '示例', link: '/example' },
          { text: 'java8 Stream中方法示例', link: '/java8 Stream中方法示例' }
        ]
      }
    ],
    outline: {
      label: '目录',
      level: [1, 4]
    },
    langMenuLabel: '切换语言',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
});