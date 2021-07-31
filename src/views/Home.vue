<template>
	<main-layout class="home-page">
		<template>
			<div class="page-title">Loan Application</div>
			<loan-application />
		</template>
	</main-layout>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout';
import LoanApplication from '@/components/loan/LoanApplication.vue';
// @ is an alias to /src
export default {
	name: 'Home',
	components: {
		MainLayout,
		LoanApplication,
	},
};
</script>
