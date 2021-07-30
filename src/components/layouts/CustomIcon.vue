<template>
	<component :is="name" class="custom-icon" />
</template>

<script>
import Home from '@/assets/svg/Home.svg';
import Account from '@/assets/svg/Account.svg';
import Card from '@/assets/svg/Card.svg';
import Credit from '@/assets/svg/Credit.svg';
import Payments from '@/assets/svg/Payments.svg';
import DeactivateCard from '@/assets/svg/card/DeactivateCard.svg';
import FreezeCard from '@/assets/svg/card/FreezeCard.svg';
import GPay from '@/assets/svg/card/GPay.svg';
import ReplaceCard from '@/assets/svg/card/ReplaceCard.svg';
import SetSpendLimit from '@/assets/svg/card/SetSpendLimit.svg';
import BusinessAndFinance from '@/assets/svg/BusinessAndFinance.svg';
import Megaphone from '@/assets/svg/Megaphone.svg';
import Flights from '@/assets/svg/Flights.svg';
import FileStorage from '@/assets/svg/FileStorage.svg';
import Transaction from '@/assets/svg/Transaction.svg';
import CardDetails from '@/assets/svg/CardDetails.svg';
import MobileLogo from '@/assets/svg/MobileLogo.svg';

export default {
	name: 'CustomIcon',
	components: {
		Home,
		Account,
		Card,
		Credit,
		Payments,
		DeactivateCard,
		FreezeCard,
		GPay,
		ReplaceCard,
		SetSpendLimit,
		BusinessAndFinance,
		Megaphone,
		Flights,
		FileStorage,
		Transaction,
		CardDetails,
		MobileLogo,
	},
	props: {
		name: {
			default: '',
		},
	},
};
</script>
