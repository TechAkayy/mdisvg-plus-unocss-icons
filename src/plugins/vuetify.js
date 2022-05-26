// Styles
import 'vuetify/styles'

// import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi as moo } from 'vuetify/iconsets/mdi-svg'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
	icons: {
		defaultSet: 'class',
		aliases: Object.keys(aliases).reduce((obj, key) => {
			obj[key] = `moo:${aliases[key]}`
			return obj
		}, {}),
		sets: {
			moo
		}
	}
})
