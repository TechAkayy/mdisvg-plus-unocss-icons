<template>
	<v-app>
		<v-main>
			<v-alert icon="logos-vue">I'm the Vue.js</v-alert>
			<v-rating
				:model-value="4.5"
				color="amber"
				dense
				half-increments
				readonly
				size="16"
				length="5"
			></v-rating>
		</v-main>
	</v-app>
</template>
