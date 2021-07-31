<template>
	<main-layout
		class="cards-page"
		:hasSlideOver="isPortableDevice && tab === 'debit_cards'"
	>
		<template>
			<available-balance />
			<v-tabs
				v-model="tab"
				:color="isPortableDevice ? 'white' : 'black'"
				:dark="isPortableDevice"
				background-color="transparent"
				class="mb-4"
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
			<v-tabs-items v-model="tab" touchless class="transparent-tabs">
				<v-tab-item value="debit_cards">
					<!-- Template for Mobile -->
					<div v-if="isPortableDevice">
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
					<v-container v-else>
						<v-card class="pa-10 d-flex aling-center" color="transparent">
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
					</v-container>
				</v-tab-item>
				<v-tab-item value="all_cards"> </v-tab-item>
			</v-tabs-items>
		</template>
		<template v-slot:slide-over>
			<card-control :controllers="controllers" class="pa-4" color="#EDF3FF" />
			<div class="pa-6">
				<card-widgets :widgets="widgets" />
			</div>
		</template>
	</main-layout>
</template>

<script>
import AvailableBalance from '@/components/card/AvailableBalance.vue';
import BankCard from '@/components/card/BankCard.vue';
import CardControl from '@/components/card/CardControl.vue';
import CardWidgets from '@/components/card/CardWidgets.vue';
import MainLayout from '@/components/layouts/MainLayout';

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
		MainLayout,
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

</style>