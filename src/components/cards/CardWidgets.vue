<template>
	<div class="card-widgets">
		<v-expansion-panels class="mb-6">
			<v-expansion-panel
				class="widget mb-6 mt-0 border-radius-8"
				v-for="(item, i) in widgets"
				:key="i"
			>
				<v-expansion-panel-header
					class="d-flex align-center pa-6"
					expand-icon="mdi-menu-down"
				>
					<v-icon class="widget-header-icon mr-2">${{ item.icon }}</v-icon
					>{{ item.title }}
					<template v-slot:actions>
						<v-icon size="20" color="#DCE4F3">mdi-chevron-down-circle</v-icon>
					</template>
				</v-expansion-panel-header>
				<v-expansion-panel-content class="white panel-content-widget-wrapper">
					<component :is="item.componentName" />
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>

<script>
import widgets from '@/components/cards/Widgets';
export default {
	name: 'CardWidgets',
	components: {
		...widgets,
	},
	props: {
		widgets: {
			type: Array,
			default: () => [],
		},
	},
};
</script>
<style lang="scss" scoped>
.card-widgets {
	width: 100%;
	.v-expansion-panel.widget {
		.widget-header-icon {
			flex: none;
		}
		background-color: #f5f9ff;
		border: 1px solid #f0f0f0 !important;
		&:before {
			box-shadow: none;
		}
		&:after {
			display: none;
			box-shadow: none;
		}
	}
}
</style>