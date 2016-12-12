<template>
	<div class="uk-flex features">

		<div class="uk-panel header">
			<ul>
				<li v-for="feature in blogs | delta | featuresMap" title="{{ feature.description }}"
					class="feature--item">
					<span class="feature--item_name">{{ feature.name }}</span>
					<span class="feature--item_author">{{ feature.createdByScreenName }}</span>
				</li>
			</ul>
		</div>

		<blog-features v-for="blog in blogs | delta"
			v-bind:blog-name="blog[0]" v-bind:blog-features="blog[1]"></blog-features>
	</div>
</template>

<script>
	import BlogFeatures from './BlogFeatures'
	import { getDelta } from '../store/features'

	function filterObject(features, iteratee) {
		const result = {}

		for (const key in features) {
			if (iteratee(key)) {
				result[key] = features[key]
			}
		}

		return result
	}

	function featuresFromBlog([blogName, features] = []) {
		return features || {}
	}

	export default {
		props: ['blogs'],

		components: {
			BlogFeatures
		},

		filters: {
			delta(blogs) {
				const delta = getDelta(blogs)
				const iteratee = key => delta.includes(key)

				return blogs.map(([name, features]) => {
					return [name, filterObject(features, iteratee)]
				})
			},

			featuresMap(blogs) {
				const features = featuresFromBlog(blogs[0])
				const result = []
				for (const featureName in features) {
					const { name, description, createdByScreenName } = features[featureName]
					result.push({ name, description, createdByScreenName })
				}
				return result
			}
		}
	}
</script>

<style>
	.features ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	.header {
		padding-top: 4rem;
		background-color: #f5f5f5;
		color: #666;
		flex-grow: 1
	}

	.feature--item_name {
		display: block;
		font-weight: bold;
		color: #333;
	}
	.feature--item_author {
		font-size: smaller;
		font-style: italic;
	}

	.feature--item {
		height: 4rem;
		padding: 0 1rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		border-bottom: 1px solid #e5e5e5;
		text-align: right;
	}
</style>
