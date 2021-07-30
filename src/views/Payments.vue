<template>
	<v-card class="mt-6 payment-view padding-from-nav transparent">
		<v-row class="mx-0 pb-2">
			<v-col cols="12" md="6">
				<h2 class="page-title mb-2">Loans</h2>
				<loans class="border-radius-8" />
			</v-col>
			<v-col cols="12" md="6">
				<h2 class="page-title mb-2">Transactions</h2>
				<recent-transactions class="border-radius-8" />
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
import RecentTransactions from '../components/cards/RecentTransactions.vue';
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
	},
	computed: {},
	methods: {},
	async created() {},
};
</script>
<style lang="scss" scoped>
.payment-view {
	overflow-y: hidden;
	z-index: 1;
}
</style>