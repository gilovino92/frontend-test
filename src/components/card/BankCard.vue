
<template>
	<div class="bank-card font-weight-bold">
		<div class="d-flex align-center justify-end text-right">
			<div
				@click="isShow = !isShow"
				class="
					white
					d-flex
					align-center
					justify-end
					border-radius-6
					py-1
					pb-5
					px-3
					toggle-number
				"
			>
				<v-icon color="primary" class="mr-2" size="16">mdi-eye</v-icon>
				<span class="primary--text"
					>{{ isShow ? 'Hide' : 'Show' }} card number</span
				>
			</div>
		</div>
		<v-card class="primary border-radius-16 pa-7 mt-n4" elevation="0" dark>
			<div class="text-right mb-4"><AspireCardLogo /></div>
			<div class="card-name font-weight-bold mb-4">{{ card.name }}</div>
			<div class="mb-3 card-number d-flex align-center">
				<div
					class="d-flex align-center mr-7"
					v-for="(part, index) in formatCardNumber"
					:key="index"
				>
					<template v-if="index !== formatCardNumber.length - 1">
						<template v-if="isShow">
							{{ part }}
						</template>
						<template v-else>
							<div class="circle-spot mr-1"></div>
							<div class="circle-spot mr-1"></div>
							<div class="circle-spot mr-1"></div>
							<div class="circle-spot"></div>
						</template>
					</template>
					<template v-else>
						{{ part }}
					</template>
				</div>
			</div>
			<div class="card-info d-flex align-center">
				<span class="mr-8">{{ card.date }}</span>
				CVV: <span class="card-cvv"> {{ card.cvv }}</span>
			</div>
			<div class="text-right"><Visa /></div>
		</v-card>
	</div>
</template>

<script>
import Visa from '@/assets/svg/card/Visa.svg';
import AspireCardLogo from '@/assets/svg/card/Aspire-card-logo.svg';
export default {
	name: 'BankCard',
	props: {
		card: {
			default: () => ({
				name: 'Mark Henry',
				number: '1234 5678 9100 2020',
				date: 'Thru: 12/20',
				cvv: '***',
			}),
		},
	},
	data() {
		return {
			isShow: false,
		};
	},
	components: {
		Visa,
		AspireCardLogo,
	},
	computed: {
		formatCardNumber() {
			return this.card.number.replace(/ /g, '').match(/.{1,4}/g);
		},
	},
};
</script>
<style lang="scss" scoped>
.bank-card {
	max-width: 414px;
	width: 100%;
	.toggle-number {
		cursor: pointer;
		font-size: 12px;
		width: 151px;
	}
	.circle-spot {
		width: 9.03px;
		height: 9.03px;
		background: #ffff;
		border-radius: 50%;
	}
	.card-name {
		font-size: 24px;
	}
	.card-number {
		letter-spacing: 3.46pt;
	}
	.card-info {
		font-size: 13px;
		letter-spacing: 1.56pt;
		.card-cvv {
			font-size: 24px;
			line-height: 0;
			margin-top: 4px;
			margin-left: 4px;
			letter-spacing: 2.88pt;
		}
	}
}
</style>
