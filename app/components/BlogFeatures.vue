<template>
	<div class="uk-panel blog">
		<h3 class="uk-panel-title blog--name">{{ blogName }}</h3>
		<ul>
			<li
				is="feature-item"
				v-for="(name, feature) in blogFeatures"
				v-bind:feature="feature"></li>
		</ul>
	</div>
</template>

<script>
	import FeatureItem from './FeatureItem'

	export default {
		props: ['blogName', 'blogFeatures'],
		components: {
			FeatureItem
		}
	}
</script>

<style>
	.blog {
		flex-grow: 2
	}
	.blog--name {
		font-size: x-large;
		margin: 0;
		height: 2rem;
		background-color: #f5f5f5;
		padding: 1rem;
		text-align: center;
		color: #333;
	}
</style>
