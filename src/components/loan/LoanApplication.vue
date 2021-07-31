<template>
	<v-card class="pa-6 form--wrapper">
		<v-row>
			<v-col cols="12" lg="6">
				<v-form v-model="formValid">
					<div class="mb-6">
						<v-row class="d-flex align-center justify-space-between">
							<v-col cols="6" class="title">Loan Amount</v-col>
							<v-col cols="6">
								<v-text-field
									v-model="inputAmount"
									class="mt-0 pt-0 loan-amount-input"
									@blur="amountInputHandler"
									@keyup.enter="enterHandler"
									hide-details
								></v-text-field
							></v-col>
						</v-row>
						<v-slider
							v-model="application.amount"
							@input="amountSliderHandler"
							:min="config.amount.min"
							:max="config.amount.max"
							:step="config.amount.step"
							class="align-center"
						>
						</v-slider>
						<div
							class="
								d-flex
								align-center
								justify-space-between
								mt-n5
								font-weight-bold
								caption
							"
						>
							<span>{{ config.amount.min | currency }}</span>
							<span>{{ config.amount.max | currency }}</span>
						</div>
					</div>
					<div class="mb-6">
						<v-row class="d-flex align-center justify-space-between">
							<v-col cols="6" class="title">Rate per week</v-col>
							<v-col
								cols="6"
								class="text-right font-weight-bold secondary--text"
							>
								{{ application.rate }} %
							</v-col>
						</v-row>
						<v-slider
							v-model="application.rate"
							:min="config.rate.min"
							:max="config.rate.max"
							:step="config.rate.step"
							class="align-center"
						>
						</v-slider>
						<div
							class="
								d-flex
								align-center
								justify-space-between
								mt-n5
								font-weight-bold
								caption
							"
						>
							<span>{{ config.rate.min }}%</span>
							<span>{{ config.rate.max }}%</span>
						</div>
					</div>
					<div class="mb-6">
						<v-row class="d-flex align-center justify-space-between">
							<v-col cols="6" class="title">Term Length</v-col>
							<v-col
								cols="6"
								class="text-right font-weight-bold secondary--text"
							>
								{{ application.terms }} Weeks
							</v-col>
						</v-row>
						<v-slider
							v-model="application.terms"
							:min="config.terms.min"
							:max="config.terms.max"
							:step="config.terms.step"
							class="align-center"
						>
						</v-slider>
						<div
							class="
								d-flex
								align-center
								justify-space-between
								mt-n5
								font-weight-bold
								caption
							"
						>
							<span>{{ config.amount.min | currency }}</span>
							<span>{{ config.amount.max | currency }}</span>
						</div>
					</div>
				</v-form>
			</v-col>
			<v-col cols="12" lg="6">
				<div class="title mb-2">Customer Information</div>
				<v-row class="d-flex align-center justify-space-between">
					<v-col cols="12" lg="6" class="title">
						<v-text-field
							label="Firstname"
							disabled
							hide-details
							:value="profile.firstname"
						/>
					</v-col>
					<v-col cols="12" lg="6" class="title">
						<v-text-field
							label="Lastname"
							disabled
							hide-details
							:value="profile.lastname"
						/>
					</v-col>
					<v-col cols="12" lg="6" class="title">
						<v-text-field
							label="dateOfBirth"
							disabled
							hide-details
							:value="getDateOfBirth"
						/>
					</v-col>
					<v-col cols="12" lg="6" class="title">
						<v-text-field
							label="Mobile Number"
							disabled
							hide-details
							:value="getUserMobileNumber"
						/>
					</v-col>
					<v-col cols="12" md="12" class="title">
						<v-text-field
							label="Address"
							disabled
							hide-details
							:value="profile.address"
						/>
					</v-col>
					<v-col cols="12" md="12" class="title">
						<v-text-field
							label="Weeky Payment"
							readonly
							hide-details
							:value="weeklyPayment | currency"
						/>
					</v-col>
					<v-col cols="12" md="12" class="title">
						<v-text-field
							label="Total Loan"
							readonly
							hide-details
							:value="totalLoan | currency"
						/>
					</v-col>
					<v-col cols="12" lg="6" class="title mt-2">
						<v-btn dense color="warning" elevation="0" block @click="reset"
							>Reset</v-btn
						>
					</v-col>
					<v-col
						cols="12"
						lg="6"
						class="title mt-2"
						:disable="isCreating"
						:loading="isCreating"
					>
						<v-btn dense color="primary" elevation="0" block @click="submit"
							>Submit</v-btn
						>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import MainLayout from '@/components/layouts/MainLayout';
// @ is an alias to /src
export default {
	name: 'LoanApplication',
	components: {
		MainLayout,
	},
	data() {
		return {
			config: {
				amount: {
					max: 500000,
					min: 100,
					step: 0.5,
				},
				rate: {
					max: 0.4,
					min: 0.1,
					step: 0.01,
				},
				terms: {
					max: 90,
					min: 1,
					step: 1,
				},
			},
			formValid: false,
			inputAmount: 0,
			application: {
				terms: 0,
				amount: 0,
				rate: 0,
			},
			isCreating: false,
		};
	},
	methods: {
		amountSliderHandler() {
			this.inputAmount = this.$options.filters.currency(
				this.application.amount
			);
		},
		amountInputHandler() {
			if (this.inputAmount === null) return;
			const parsedAmount = Number(this.inputAmount.replace(/[^0-9.]+/g, ''));
			if (!isNaN(parsedAmount)) {
				this.application.amount = parsedAmount;
				return;
			}
			this.application.amount = 0;
		},
		enterHandler() {
			document.activeElement.blur();
		},
		reset() {
			Object.assign(this.application, {
				terms: 0,
				amount: 0,
				rate: 0,
			});
		},
		async submit() {
			this.isCreating = true;
			const { id, lastname, firstname } = this.profile;
			await this.dispatch('loan/createLoan', {
				...this.application,
				ownerID: id,
				lastname,
				firstname,
				approved: false,
			});
			this.isCreating = false;
		},
	},
	computed: {
		...mapState('user', ['profile']),
		...mapGetters('user', ['getUserMobileNumber', 'getDateOfBirth']),
		interest() {
			return (
				(this.application.amount *
					this.application.rate *
					this.application.terms) /
				100
			);
		},
		weeklyPayment() {
			return (this.application.amount + this.interest) / this.application.terms;
		},
		totalLoan() {
			return this.application.amount + this.interest;
		},
	},
	async created() {},
};
</script>
<style lang="scss" scoped>
.home {
	padding-top: 24px;
}
.home-mobile-mode {
	color: #ffff;
	padding-top: 86px;
	.page-title {
		position: fixed;
		top: 24px;
	}
	.form--wrapper {
		z-index: 1;
	}
}
</style>