export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      job: 'Software Engineer @ROIT',
      contact: 'Contact',
      description: 'I am a Software Engineer based in Curitiba, Brazil, with extensive experience in software development and system architecture.',
      footer: '© 2023 Lucas Guiss Gusmão. All rights reserved.',
      temp: 'In development, meanwhile you can contact me at:'
    },
    "pt-BR": {
      job: 'Fullstack Developer na ROIT',
      contact: 'Contato',
      description: 'Eu sou um Engenheiro de Software com base em Curitiba, Brasil, com ampla experiência em desenvolvimento de software e arquitetura de sistemas.',
      footer: '© 2023 Lucas Guiss Gusmão. Todos os direitos reservados.',
      temp: 'Em desenvolvimento, enquanto isso me contate em:'
    }
  }
}))