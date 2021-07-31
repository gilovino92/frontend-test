<template>
	<v-main>
		<div
			:class="{
				'fixed-content': hasSlideOver,
				'view-content': !hasSlideOver,
			}"
		>
			<div class="text-right mobile-logo" v-if="isPortableDevice">
				<v-icon color="primary" size="25"> $MobileLogo </v-icon>
			</div>
			<slot> </slot>
		</div>
		<div class="slide-over pb-6" v-if="hasSlideOver">
			<slot name="slide-over"> </slot>
		</div>
	</v-main>
</template>
<script>
export default {
	name: 'MainLayout',
	props: {
		hasSlideOver: {
			default: false,
		},
	},
	data() {
		return {};
	},
};
</script>
<style lang="scss" scoped>
.v-main {
	min-height: 100%;
	padding-bottom: 56px !important;

	.view-content {
		margin-left: 340px;
	}
	@media only screen and (max-width: 1264px) {
		background-color: var(--v-secondary-base) !important;
		border-color: var(--v-secondary-base) !important;
		color: #ffffff !important;
		caret-color: #ffffff !important;
		.view-content {
			margin: 0px;
		}
	}

	.fixed-content {
		background-color: var(--v-secondary-base);
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		bottom: 0;
		padding: 24px 24px 0px;
	}
	.slide-over {
		z-index: 2;
		overflow-x: hidden;
		margin-top: 485px;
		min-height: 100vh;
		position: relative;
		background-color: white;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
	}
}
// .slide-over {
// 	z-index: 2;
// 	overflow-x: hidden;
// 	margin-top: 455px;
// 	min-height: 100vh;
// 	position: relative;
// 	background-color: white;
// 	border-top-left-radius: 16px;
// 	border-top-right-radius: 16px;
// 	.card-control {
// 		border-top-left-radius: 16px;
// 		border-top-right-radius: 16px;
// 		border-bottom-left-radius: 0;
// 		border-bottom-right-radius: 0;
// 	}
// }
</style>