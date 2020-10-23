module.exports = {
    title: 'Opengate UX Quick Reference',
    description: 'Here you can learn to develop and deploy your own wiwi (wizard/widget) for the Opengate platform',
    plugins: [
        ['flexsearch'],
        ['@vuepress/active-header-links'],
        ['@vuepress/back-to-top'],
        ['vuepress-plugin-export']
    ],
    base: "/docuUX/",
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        lang: 'Español', // this will be set as the lang attribute on <html>
        title: 'Características avanzadas UX',
        description: 'Primeros pasos'
      },
      // '/en/': {
      //   lang: 'English',
      //   title: 'UX Advanced features',
      //   description: 'Quick Start'
      // }
    },
    themeConfig: {
      editLinks: false,
      logo: '/logo/opengate.png',
      locales: {
        '/': {
          selectText: 'Idiomas',
          nav: [
            {
              text: 'Inicio',
              link: '/'
            },
            {
              text: 'WiWi Kit de desarrollo (WWDK)',
              link: '/wiwis/'
            },
            {
              text: 'Vistas personalizadas',
              link: '/views/'
            },
            {
              text: 'OGAPI',
              link: '/ogapi/'
            }
          ],
          displayAllHeaders: true,
          sidebarDepth: 2,
          sidebar: {
            '/wiwis/': [
              '',
              'development',
              'deployment'
            ],
            '/ogapi/': [
              ''
            ],
            '/views/': [
              ''
            ],
            '/': ['']
          }
        },
        '/en/': {
          selectText: 'Languages',
          nav: [
            {
              text: 'Home',
              link: '/en/'
            },
            {
              text: 'WiWi Development Kit (WWDK)',
              link: '/en/wiwis/'
            },
            {
              text: 'Custom Views',
              link: '/en/views/'
            },
            {
              text: 'OGAPI',
              link: '/en/ogapi/'
            }
          ],
          displayAllHeaders: true,
          sidebarDepth: 2,
          sidebar: {
            '/en/wiwis/': [
              '',
              'development',
              'deployment'
            ],
            '/en/ogapi/': [
              ''
            ],
            '/en/views/': [
              ''
            ],
            '/en/': ['']
          }
        }
      }
    }
}