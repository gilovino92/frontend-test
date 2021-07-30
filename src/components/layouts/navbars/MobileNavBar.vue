<template>
	<v-bottom-navigation fixed grow class="mobile-navbar" color="primary">
		<v-btn v-for="menu in menus" :key="menu.text" :to="{ name: menu.pathName }">
			<span class="menu-text pt-1">{{ $t(`mobile_nav.${menu.text}`) }}</span>
			<v-icon>{{ `$${menu.icon}` }}</v-icon>
		</v-btn>
	</v-bottom-navigation>
</template>
<script>
export default {
	name: 'MobileNavBar',
	props: {
		menus: {
			type: Array,
			default: () => [],
		},
	},
};
</script>
<style lang="scss" scoped>
.theme--light.v-bottom-navigation.mobile-navbar {
	.v-btn--active::before {
		opacity: 0;
	}
	.v-btn:not(.v-btn--active) {
		color: rgb(221, 221, 221) !important;
	}
	.menu-text {
		font-size: 9px;
	}
}

.v-btn {
	&.v-btn--active.v-icon {
		color: red !important;
	}
	background-color: transparent !important;
	height: unset !important;
	min-height: 47px !important;
}
</style>