// Styles
import 'vuetify/styles'

// import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi as moo } from 'vuetify/iconsets/mdi-svg'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
	icons: {
		defaultSet: 'moo',
		aliases,
		sets: {
			moo
		}
	}
})
