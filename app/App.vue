<template>
  <div id="app">
    <input type="text" class="uk-form-large uk-form-blank input--blog"
			@keyup.enter="onPressedEnter" placeholder="{{ placeholderMessage }}">

		<loading-bar :show="loading"></loading-bar>

		<alert :show="alertVisible" :message="alertMessage" v-on:close="hideAlert"></alert>

		<results v-if="blogs.length > 0" :blogs="blogs"></results>
		<div v-else class="uk-block uk-block-muted uk-text-center blogs--empty">
			<p class="uk-text-large">Type a kinja hostname into the input above, then press enter</p>
			<p>A kinja host looks like this: <code>jezebel.com</code>, <code>thebests.kotaku.com</code>, <code>test.kinja.com</code></p>
		</div>
  </div>
</template>

<script>
	import Results from './components/Results'
	import LoadingBar from './components/LoadingBar'
	import alertMixin from './mixins/alert'
	import { getFeaturesForBlog } from './store/features'

	function getBlogByName(value, blogs) {
		return blogs.find(([blogName]) => blogName === value)
	}

	function validateHost(value, blogs) {
		if (!value.endsWith('.com')) {
			throw new Error(`${value} does not look like a kinja host.`)
		}

		if (getBlogByName(value, blogs)) {
			throw new Error(`${value} already in store`)
		}

		return value
	}

	export default {

		components: {
			Results,
			LoadingBar
		},

		mixins: [
			alertMixin
		],

		data() {
			return {
				blogs: [],
				loading: false
			}
		},

		computed: {
			placeholderMessage() {
				switch (this.blogs.length) {
				case 0:
					return 'Give me a kinja blog host to work with'
				case 1:
					return 'I need at least two host, give me another one'
				default:
					return 'Great! Feed me more!'
				}
			}
		},

		methods: {
			onPressedEnter({ target }) {
				const finishLoading = () => { this.loading = false }

				this.loading = true
				let kinjaHost
				try {
					kinjaHost = validateHost(target.value, this.blogs)
				} catch (err) {
					finishLoading()
					this.showAlert(err.message)
				}

				if (kinjaHost) {
					this.addHost(kinjaHost)
						.then(() => {
							finishLoading()
							target.value = ''
						})
						.catch((err) => {
							finishLoading()
							this.showAlert(err.message)
						})
				}
			},

			async addHost(blogName) {
				const blogFeatures = await getFeaturesForBlog(blogName)
				this.blogs.push([blogName, blogFeatures])
			}
		}

		// Used for testing
		// created() {
		// 	const blogs = ['jezebel.com', 'kotaku.com']
		// 	blogs.forEach(this.addHost.bind(this))
		// }
	}
</script>

<style>
	.input--blog {
		width: 100%;
		text-align: center;
	}
	.input--blog:focus {
		outline: 0;
	}
</style>
