export default defineAppConfig({
  global: {
    author: {
      name: 'JD Solanki',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/47495003?v=4',
        alt: 'JD Solanki'
      }
    },
    picture: {
      dark: 'https://avatars.githubusercontent.com/u/47495003?v=4',
      light: 'https://avatars.githubusercontent.com/u/47495003?v=4',
      alt: 'My profile picture'
    },
    email: 'jdsolanki0001@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-x',
        'to': 'https://x.com/me_jd_solanki',
        'target': '_blank',
        'aria-label': 'Nuxt on X'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/jd-solanki',
        'target': '_blank',
        'aria-label': 'Nuxt UI on GitHub'
      },
      {
        'icon': 'i-simple-icons-discord',
        'to': 'https://discord.com/users/592391931355463719',
        'target': '_blank',
        'aria-label': 'JD Solanki on Discord'
      }
    ]
  }
})
