<template>
	<v-list subheader three-line class="pb-0">
		<div v-for="(item, index) in loans" :key="index" class="px-6">
			<v-list-item class="py-2">
				<v-list-item-content>
					<v-list-item-title
						class="
							d-flex
							align-center
							justify-space-between
							font-weight-bold
							subtitle-2
							mb-1
						"
					>
						<span>{{ `${item.lastname} ${item.firstname}` }}</span>
						<span class="error--text">
							{{ item.amount | currency }}
							<v-icon size="14">mdi-chevron-right</v-icon></span
						>
					</v-list-item-title>
					<v-list-item-subtitle class="caption mb-3"
						>{{ item.rate }}% per Week</v-list-item-subtitle
					>
					<v-list-item-subtitle
						class="
							caption
							font-weight-bold
							d-flex
							align-center
							justify-space-between
							change-to-debit
						"
					>
						<span class="description">Terms: {{ item.terms }} Weeks</span>
						<template v-if="item.approved">
							<v-btn
								color="primary"
								small
								elevation="0"
								outlined
								@click="repay(item)"
								>Repay</v-btn
							>
						</template>
						<template v-else>
							<span class="gray--text">PENDING</span>
						</template>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-divider
				light
				:key="`divider_${index}`"
				v-if="index < loans.length - 1"
			/>
		</div>
	</v-list>
</template>

<script>
import { mapState } from 'vuex';
// 'BusinessAndFinance', 'Megaphone', 'Flights', 'FileStorage';
export default {
	name: 'Loan',
	computed: {
		...mapState('loan', ['loans']),
	},
	methods: {
		async repay(item) {
			const date = new Date();
			const options = { year: 'numeric', month: 'short', day: 'numeric' };
			const weekly_paid =
				(item.amount + (item.amount * item.rate * item.terms) / 100) /
				item.terms;
			const payload = {
				ownerID: item.ownerID,
				category: 1,
				type: 'deposit',
				details: {
					name: `${item.lastname} ${item.firstname}`,
					date: date.toLocaleDateString(undefined, options),
					amount: weekly_paid,
				},
			};
			this.toggleLoading(true);
			await this.dispatch('transactions/createTransaction', payload);
			this.toggleLoading(false);
		},
	},
	data() {
		return {};
	},
};
</script>
<style lang="scss" scoped>
.view-all-transaction.v-btn--has-bg.v-size--small {
	background-color: #edfff5;
	height: unset;
	border-color: #ddffec;
	border-end-end-radius: 8px;
}
</style>