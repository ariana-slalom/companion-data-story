import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'supportSide',
    themes: {
      supportSide: {
        dark: false,
        colors: {
          background: '#FBF6F1',
          surface: '#FFFFFF',
          primary: '#8C5B4A',
          'primary-darken-1': '#6E4436',
          secondary: '#7C8B6F',
          accent: '#C97C6D',
          error: '#B3483F',
          info: '#5C7A99',
          success: '#7C8B6F',
          warning: '#D3A24C',
        },
      },
    },
  },
  defaults: {
    VBtn: { rounded: 'pill' },
    VCard: { rounded: 'lg' },
  },
})
