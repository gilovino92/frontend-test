<template>
	<div
		class="card-view"
		elevation="0"
		:class="{
			'white--text mobile-mode': isMobile,
			' py-15 white desktop-mode': !isMobile,
		}"
	>
		<div class="fixed-content">
			<div class="d-flex justify-space-between align-end pa-6">
				<available-balance />
			</div>
			<v-tabs
				v-model="tab"
				:color="isMobile ? 'white' : 'black'"
				:dark="isMobile"
				background-color="transparent"
				class="mb-4 px-6"
			>
				<v-tabs-slider color="#23CEFD"></v-tabs-slider>
				<v-tab
					class="px-0 font-weight-bold mr-8 text-transfrom-none"
					href="#debit_cards"
					>My debit cards</v-tab
				>
				<v-tab
					class="px-0 font-weight-bold text-transfrom-none"
					href="#all_cards"
					>All company cards</v-tab
				>
			</v-tabs>
			<v-tabs-items v-model="tab" touchless>
				<v-tab-item value="debit_cards">
					<!-- Template for Mobile -->
					<div class="card-mobile" v-if="isMobile">
						<swiper
							class="swiper"
							:options="swiperOption"
							style="max-width: 100%"
						>
							<swiper-slide v-for="i in [1, 2, 3, 4]" :key="i">
								<bank-card />
							</swiper-slide>
							<div
								class="swiper-pagination swiper-pagination-bullets"
								slot="pagination"
							></div>
						</swiper>
					</div>
					<!-- Template for Desktop -->
					<v-card class="pa-10 d-flex aling-center" color="transparent" v-else>
						<div class="d-flex align-center flex-column left-column mr-12">
							<swiper
								class="swiper"
								:options="swiperOption"
								style="max-width: 100%"
							>
								<swiper-slide v-for="i in [1, 2, 3, 4]" :key="i">
									<bank-card class="mb-12" />
								</swiper-slide>
								<div
									class="swiper-pagination swiper-pagination-bullets"
									slot="pagination"
								></div>
							</swiper>
							<card-control
								:controllers="controllers"
								class="pa-4 border-radius-16"
								color="#EDF3FF"
							/>
						</div>
						<div class="right-column">
							<card-widgets :widgets="widgets" />
						</div>
					</v-card>
				</v-tab-item>
				<v-tab-item value="all_cards"> </v-tab-item>
			</v-tabs-items>
		</div>
		<!-- Controller for mobile -->
		<div
			class="mobile-controller pb-6"
			v-show="isMobile && tab === 'debit_cards'"
		>
			<card-control :controllers="controllers" class="pa-4" color="#EDF3FF" />
			<div class="pa-6">
				<card-widgets :widgets="widgets" />
				<card-widgets :widgets="widgets" />
			</div>
		</div>
	</div>
</template>

<script>
import AvailableBalance from '@/components/cards/AvailableBalance.vue';
import BankCard from '@/components/cards/BankCard.vue';
import CardControl from '@/components/cards/CardControl.vue';
import CardWidgets from '@/components/cards/CardWidgets.vue';

// @ is an alias to /src
export default {
	name: 'Cards',
	data() {
		return {
			bottom: 0,
			swiperOption: {
				spaceBetween: 30,
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true,
					clickable: true,
					renderBullet(index, className) {
						return `<span class="${className} swiper-pagination-bullet-custom">${
							index + 1
						}</span>`;
					},
				},
			},
			tab: 'debit_cards',
			controllers: [
				{
					text: 'Freeze card',
					icon: 'FreezeCard',
					callback: () => {},
				},
				{
					text: 'Set spend limit',
					icon: 'SetSpendLimit',
					callback: () => {},
				},
				{
					text: 'Add to GPay',
					icon: 'GPay',
					callback: () => {},
				},
				{
					text: 'Replace card',
					icon: 'ReplaceCard',
					callback: () => {},
				},
				{
					text: 'Cancel card',
					icon: 'DeactivateCard',
					callback: () => {},
				},
			],
			widgets: [
				{
					title: 'Card details',
					componentName: 'CardDetails',
					icon: 'CardDetails',
				},
				{
					title: 'Recent transactions',
					componentName: 'RecentTransactions',
					icon: 'Transaction',
				},
			],
		};
	},
	components: {
		AvailableBalance,
		BankCard,
		CardControl,
		CardWidgets,
	},
	methods: {},
	created() {},
	destroyed() {},
	computed: {
		swiper() {
			return this.$refs.mySwiper.$swiper;
		},
	},
};
</script>
<style lang="scss" scoped>
.swiper {
	::v-deep .swiper-pagination-bullet-custom {
		text-align: center;
		opacity: 0.7;
		border-radius: 8px;
		background-color: #ccf6e1;
		&:hover {
			opacity: 1;
		}

		&.swiper-pagination-bullet-active {
			opacity: 1;
			background-color: #01d167;
			width: 16px !important;
			height: 8px !important;
		}
	}
}
.card-view {
	min-height: 100vh;
	&.mobile-mode {
		.fixed-content {
			background-color: var(--v-secondary-base);
			position: fixed;
			width: 100%;
			top: 0;
			bottom: 0;
		}
		.bank-card {
			transform: scale(0.8);
		}
		.swiper-slide {
			align-items: center;
			justify-content: center;
			display: flex;
		}
		.mobile-controller {
			z-index: 2;
			overflow-x: hidden;
			margin-top: 455px;
			min-height: 100vh;
			position: relative;
			background-color: white;
			border-top-left-radius: 16px;
			border-top-right-radius: 16px;
			.card-control {
				border-top-left-radius: 16px;
				border-top-right-radius: 16px;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}
	}
	&.desktop-mode {
		.left-column {
			max-width: 414px;
		}
		.right-column {
			width: 100%;
		}
	}

	.v-tabs-items {
		background-color: transparent !important;
	}
}
</style>