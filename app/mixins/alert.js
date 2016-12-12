import Alert from '../components/Alert'

let timeout

export default {
	data() {
		return {
			alertVisible: false,
			alertMessage: ''
		}
	},

	components: {
		Alert
	},

	methods: {
		showAlert(message = '') {
			this.alertVisible = true
			this.alertMessage = message

			if (timeout) {
				clearTimeout(timeout)
			}
			timeout = setTimeout(() => this.hideAlert(), 5000)
		},

		hideAlert() {
			clearTimeout(timeout)
			this.alertVisible = false
		}
	}
}
