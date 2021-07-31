<template>
	<v-card
		elevation="0"
		v-bind="$attrs"
		class="card-control d-flex align-center justify-space-between"
	>
		<div
			v-for="(control, index) in controllers"
			:key="index"
			class="d-flex flex-column align-center justify-space-between"
		>
			<v-icon size="32">${{ control.icon }}</v-icon>
			<div class="text-center control-text">{{ $t(control.text) }}</div>
		</div>
	</v-card>
</template>

<script>
// @ is an alias to /src
export default {
	name: 'CardControl',
	props: {
		controllers: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {};
	},
	components: {},
	computed: {},
	methods: {},
	async created() {},
};
</script>
<style lang="scss" scoped>
.card-control {
	width: 100%;
	.control-text {
		font-size: 13px;
		width: 60px;
	}
}
</style>