<template>
		<li
			v-bind:class="itemClasses"
			title="{{ feature.name }}"
			class="feature--item">
			{{ feature.value }}
		</li>
</template>

<script>
	export default {
		props: ['feature'],

		computed: {
			itemClasses() {
				return {
					'feature--on': this.feature.value === 'on',
					'feature--off': this.feature.value === 'off'
				}
			}
		}
	}
</script>

<style>
	.blog .feature--item {
		color: #fff;
		align-items: center;
		text-align: center;
	}
	.blog .feature--item.feature--on {
		background-color: #39a235;
		border-bottom: 1px solid #2b7c28;
	}
	.blog .feature--item.feature--off {
		background-color: #ef7740;
		border-bottom: 1px solid #e95613;
	}
</style>
