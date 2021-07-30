<template>
	<v-app class="app-wrapper">
		<v-overlay
			:value="overlay"
			opacity="0.3"
			z-index="2"
			style="height: 100%; width: 100%"
		>
			<v-progress-circular
				v-if="isLoading"
				indeterminate
				color="primary"
				:size="50"
			></v-progress-circular>
		</v-overlay>

		<v-main
			class="main-wrapper"
			:class="{ 'away-from-nav': !isMobile, secondary: isMobile }"
		>
			<v-icon color="primary" size="25" class="mobile-logo">$MobileLogo</v-icon>
			<router-view></router-view>
		</v-main>
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
		...mapState('app', ['showOverlay', 'isLoading']),
		overlay: {
			get() {
				return this.showOverlay;
			},
			set(value) {
				this.toggleOverlay(value);
			},
		},
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