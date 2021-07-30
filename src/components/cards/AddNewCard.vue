<template>
	<v-btn
		dense
		:color="isMobile ? '#23CEFD' : '#325BAF'"
		dark
		elevation="0"
		:text="isMobile"
		:small="isMobile"
	>
		<v-icon class="mr-2" :small="isMobile">mdi-plus-circle</v-icon>
		<span class="font-weight-bold">New card</span>
	</v-btn>
</template>

<script>
export default {
	name: 'AddNewCard',
};
</script>
