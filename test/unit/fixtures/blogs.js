export const noDiff = [
	['jezebel.com', {
		cloudinary_pop: { name: 'cloudinary_pop', value: 'off' },
		use_dap: { name: 'use_dap', value: 'on' }
	}],
	['gizmodo.com', {
		cloudinary_pop: { name: 'cloudinary_pop', value: 'off' },
		use_dap: { name: 'use_dap', value: 'on' }
	}]
]

export const allDiff = [
	['jezebel.com', {
		cloudinary_pop: { name: 'cloudinary_pop', value: 'off' },
		use_dap: { name: 'use_dap', value: 'on' }
	}],
	['gizmodo.com', {
		cloudinary_pop: { name: 'cloudinary_pop', value: 'on' },
		use_dap: { name: 'use_dap', value: 'off' }
	}]
]

export const allDiffResult = ['cloudinary_pop', 'use_dap']

export const someDiffInOne = [
	['jezebel.com', {
		cloudinary_pop: { name: 'cloudinary_pop', value: 'off' },
		use_dap: { name: 'use_dap', value: 'off' },
		commerce_v2: { name: 'commerce_v2', value: 'off' },
		trending_thumbs: { name: 'trending_thumbs', value: 'on' },
		liveblog: { name: 'liveblog', value: 'off' }
	}],
	['gizmodo.com', {
		cloudinary_pop: { name: 'cloudinary_pop', value: 'off' },
		use_dap: { name: 'use_dap', value: 'on' },
		commerce_v2: { name: 'commerce_v2', value: 'on' },
		trending_thumbs: { name: 'trending_thumbs', value: 'on' },
		liveblog: { name: 'liveblog', value: 'on' }
	}]
]

export const someDiffInOneResult = ['use_dap', 'commerce_v2', 'liveblog']

export const someDiffInAll = [
	['jezebel.com', {
		cloudinary_pop: { name: 'cloudinary_pop', value: 'off' },
		use_dap: { name: 'use_dap', value: 'on' },
		commerce_v2: { name: 'commerce_v2', value: 'off' },
		trending_thumbs: { name: 'trending_thumbs', value: 'on' },
		liveblog: { name: 'liveblog', value: 'off' }
	}],
	['gizmodo.com', {
		cloudinary_pop: { name: 'cloudinary_pop', value: 'off' },
		use_dap: { name: 'use_dap', value: 'on' },
		commerce_v2: { name: 'commerce_v2', value: 'on' },
		trending_thumbs: { name: 'trending_thumbs', value: 'off' },
		liveblog: { name: 'liveblog', value: 'on' }
	}],
	['kotaku.com', {
		cloudinary_pop: { name: 'cloudinary_pop', value: 'off' },
		use_dap: { name: 'use_dap', value: 'off' },
		commerce_v2: { name: 'commerce_v2', value: 'on' },
		trending_thumbs: { name: 'trending_thumbs', value: 'on' },
		liveblog: { name: 'liveblog', value: 'off' }
	}]
]

export const someDiffInAllResult = ['use_dap', 'commerce_v2', 'trending_thumbs', 'liveblog']
