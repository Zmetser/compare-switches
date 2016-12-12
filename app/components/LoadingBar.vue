<template>
	<div class="yt-loader" v-show="show"></div>
</template>

<script>
	export default {
		props: ['show']
	}
</script>

<style>
	/* https://codepen.io/Figurated/details/xunFb */

	.yt-loader {
		animation-name: horizontalProgressBar;
		animation-timing-function: ease-in-out;
		animation-duration: 1s;
		animation-fill-mode: both;
		animation-iteration-count: infinite;
		background: #0093ec;
		height: 3px;
		left: 0;
		position: fixed;
		top: 0;
		width: 0%;
		z-index: 9999;
	}

	@keyframes horizontalProgressBar {
		0% { width: 0%; }
		100% { width: 100%; }
	}
</style>
