<template>
	<main-layout class="payment-page">
		<slot>
			<div class="page-title">Payments</div>
			<div class="payment-view transparent">
				<v-row class="mx-0 pb-2">
					<v-col cols="12" md="6">
						<h3 class="mb-2">Loans</h3>
						<loans class="border-radius-8" />
					</v-col>
					<v-col cols="12" md="6">
						<h3 class="mb-2">Transactions</h3>
						<recent-transactions class="border-radius-8" />
					</v-col>
				</v-row>
			</div>
		</slot>
	</main-layout>
</template>

<script>
import RecentTransactions from '@/components/card/RecentTransactions.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import Loans from '../components/loan/Loans.vue';
// @ is an alias to /src
export default {
	name: 'Payments',
	data() {
		return {};
	},
	components: {
		Loans,
		RecentTransactions,
		MainLayout,
	},
	computed: {},
	methods: {},
	async created() {},
};
</script>
<style lang="scss" scoped>
</style>