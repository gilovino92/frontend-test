<template>
	<v-btn
		dense
		:color="isPortableDevice ? '#23CEFD' : '#325BAF'"
		dark
		elevation="0"
		:text="isPortableDevice"
		:small="isPortableDevice"
	>
		<v-icon class="mr-2" :small="isPortableDevice">mdi-plus-circle</v-icon>
		<span class="font-weight-bold">New card</span>
	</v-btn>
</template>

<script>
export default {
	name: 'AddNewCard',
};
</script>
