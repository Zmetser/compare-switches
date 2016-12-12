<template>
	<div transition="fadeIn" class="uk-alert uk-alert-danger uk-text-center" v-show="show">
		<button v-on:click="close" class="uk-alert-close uk-close"></button>
		<p>{{ message }}</p>
	</div>
</template>

<script>
	export default {
		props: ['show', 'message'],

		methods: {
			close() {
				this.$emit('close')
			}
		}
	}
</script>

<style>
	.uk-alert {
		transition: opacity .3s linear;
	}
	.fadeIn-transition {
    opacity: 1;
  }
  .fadeIn-leave,
  .fadeIn-enter {
    opacity: 0;
  }
</style>
