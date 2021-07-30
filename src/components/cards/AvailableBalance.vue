<template>
	<div class="available-balance">
		<div class="mb-2">Available balance</div>
		<div class="d-flex align-center justify-space-between">
			<div class="d-flex align-center">
				<span
					class="
						px-3
						caption
						primary
						white--text
						font-weight-bold
						mr-3
						currency
					"
					>S$</span
				>
				<span class="font-weight-bold amount">3,000</span>
			</div>
			<add-new-card />
		</div>
	</div>
</template>

<script>
import AddNewCard from '@/components/cards/AddNewCard.vue';

export default {
	name: 'AvailableBalance',
	components: {
		AddNewCard,
	},
};
</script>
<style lang="scss" scoped>
.available-balance {
	width: 100%;
	.amount {
		font-size: 26px;
	}
	.currency {
		border-radius: 4px;
		padding-top: 2px;
		padding-bottom: 2px;
	}
}
</style>