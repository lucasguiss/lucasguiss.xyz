export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pt-BR',
  detectBrowserLanguage: {
    useCookie: false
  },
  messages: {
    en: {
      job: 'Software Engineer @ROIT',
      contact: 'Contact',
      description: 'I am a Software Engineer with extensive experience in software development. My career reflects my ability to provide creative and efficient solutions in dynamic development environments.',
      footer: '© 2023 Lucas Guiss Gusmão. All rights reserved.',
      temp: 'In development, meanwhile you can contact me at:'
    },
    "pt-BR": {
      job: 'Desenvolvedor Fullstack na ROIT',
      contact: 'Contato',
      description: 'Eu possuo ampla experiência em desenvolvimento de software. Minha carreira reflete minha capacidade de fornecer soluções criativas e eficientes em ambientes dinâmicos de desenvolvimento.',
      footer: '© 2023 Lucas Guiss Gusmão. Todos os direitos reservados.',
      temp: 'Em desenvolvimento, enquanto isso me contate em:'
    }
  }
}))