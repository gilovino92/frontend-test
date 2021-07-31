<template>
	<v-app class="app-wrapper">
		<!-- toarst -->
		<v-snackbar v-model="snackbar" :color="message.color" top right>
			{{ message.text }}

			<template v-slot:action="{ attrs }">
				<v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
			</template>
		</v-snackbar>
		<!-- Overlay loading -->
		<v-overlay
			:value="overlay"
			opacity="0.3"
			z-index="5"
			style="height: 100%; width: 100%"
		>
			<v-progress-circular
				v-if="isLoading"
				indeterminate
				color="primary"
				:size="50"
			></v-progress-circular>
		</v-overlay>
		<!-- main route view -->
		<router-view></router-view>

		<!-- Navigation Menu -->
		<nav-bar />
	</v-app>
</template>
<script>
import { mapState } from 'vuex';
import NavBar from '@/components/layouts/NavBar.vue';
import '@/style/main.scss';
export default {
	components: { NavBar },
	computed: {
		...mapState('app', ['showOverlay', 'isLoading', 'message']),
		overlay: {
			get() {
				return this.showOverlay;
			},
			set(value) {
				this.toggleOverlay(value);
			},
		},
		snackbar: {
			get() {
				return this.message.display;
			},
			set(value) {
				this.dispatch('app/toggleMessage', { ...this.message, display: value });
			},
		},
	},
	async created() {
		this.toggleLoading(true);
		await this.dispatch('user/getUserProfile');
		await this.dispatch('loan/getLoans');
		await this.dispatch('transactions/getTransactions');
		this.toggleLoading(false);
	},
};
</script>
<style lang="scss">
.main-wrapper {
	.container {
		height: 100%;
	}
	padding: 0px !important;
	.mobile-logo {
		position: fixed;
		top: 12px;
		right: 24px;
		z-index: 1;
	}
}
</style>