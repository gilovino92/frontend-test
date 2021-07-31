<template>
	<v-list subheader three-line class="pb-0 pt-6">
		<div v-for="(item, index) in transactions" :key="index" class="px-6">
			<v-list-item class="py-2">
				<v-list-item-avatar :color="background[item.category]">
					<v-icon size="16" :color="colors[item.category]">
						${{ iconMapper[item.category] }}
					</v-icon>
				</v-list-item-avatar>

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
						<span>{{ item.details.name }}</span>
						<span :class="{ 'primary--text': item.type === 'deposit' }">
							{{ item.type === 'deposit' ? '+' : '-'
							}}{{ item.details.amount | currency }}
							<v-icon size="14">mdi-chevron-right</v-icon></span
						>
					</v-list-item-title>

					<v-list-item-subtitle
						class="caption mb-3"
						v-text="item.details.date"
					></v-list-item-subtitle>
					<v-list-item-subtitle
						class="caption font-weight-bold d-flex align-center change-to-debit"
					>
						<div class="icon mr-2">
							<v-icon size="10" color="white">$BusinessAndFinance</v-icon>
						</div>
						<span class="description">Change to debit card</span>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-divider
				light
				:key="`divider_${index}`"
				v-if="index < transactions.length - 1"
			/>
		</div>
		<v-btn
			dense
			elevation="0"
			color="primary--text"
			block
			class="view-all-transaction py-4"
			small
			>View all card transactions</v-btn
		>
	</v-list>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'RecentTransactions',
	data() {
		return {
			colors: {
				1: 'info',
				2: 'success',
				3: 'error',
			},
			background: {
				1: '#009DFF1A',
				2: '#009DFF1A',
				3: '#F251951A',
			},
			iconMapper: {
				1: 'FileStorage',
				2: 'Flights',
				3: 'Megaphone',
			},
		};
	},
	computed: {
		...mapState('transactions', ['transactions']),
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