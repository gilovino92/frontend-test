<template>
	<v-navigation-drawer
		class="secondary pa-8 desktop-navbar"
		permanent
		width="340"
		fixed
		dark
	>
		<v-list class="nav-logo mb-2">
			<v-list-item>
				<Logo />
			</v-list-item>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-subtitle
						>Trusted way of banking for 3,000+ SMEs and startups in
						Singapore</v-list-item-subtitle
					>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<v-list>
			<v-list-item
				class="my-3"
				v-for="menu in menus"
				:key="menu.text"
				:to="{ name: menu.pathName }"
			>
				<v-list-item-icon class="mr-4">
					<v-icon>{{ `$${menu.icon}` }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{
						$t(`desktop_nav.${menu.text}`)
					}}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>
<script>
import Logo from '@/assets/svg/Logo.svg';

export default {
	name: 'DesktopNavBar',
	components: {
		Logo,
	},
	props: {
		menus: {
			type: Array,
			default: () => [],
		},
	},
};
</script>
<style lang="scss" scoped>
.desktop-navbar {
	.v-list {
		.v-list-item--active::before {
			opacity: 0;
		}
		.v-list-item--active {
			color: var(--v-primary-base);
			font-weight: bold;
		}
	}
	.nav-logo {
		.v-list-item__subtitle {
			overflow: hidden;
			text-overflow: unset;
			white-space: break-spaces;
			opacity: 0.3;
		}
	}
}
</style>