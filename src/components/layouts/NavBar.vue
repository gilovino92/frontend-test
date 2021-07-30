<template>
	<component
		:is="isPortableDevice ? 'mobile-nav-bar' : 'desktop-nav-bar'"
		:menus="menus"
	/>
</template>
<script>
import DesktopNavBar from '@/components/layouts/navbars/DesktopNavBar.vue';
import MobileNavBar from '@/components/layouts/navbars/MobileNavBar.vue';

export default {
	name: 'NavBar',
	components: { DesktopNavBar, MobileNavBar },
	data() {
		return {
			menus: [
				{
					text: 'home',
					icon: 'home',
					pathName: 'Home',
				},
				{
					text: 'cards',
					icon: 'card',
					pathName: 'Cards',
				},
				{
					text: 'payments',
					icon: 'payments',
					pathName: 'Payments',
				},
				{
					text: 'credit',
					icon: 'credit',
					pathName: 'Credit',
				},
				{
					text: 'account',
					icon: 'account',
					pathName: 'Account',
				},
			],
		};
	},
};
</script>
<style lang="scss" scoped>
.menu-text {
	text-transform: capitalize;
}
.v-btn {
	background-color: transparent !important;
	height: unset !important;
	min-height: 47px !important;
}
</style>