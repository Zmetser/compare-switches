const featuresAPIURL = 'http://kinja.dev:9000/ajax/features'

class FetchError extends Error {
	constructor(message, meta) {
		super(message)
		this.type = 'FetchError'
		this.message = message
		this.meta = meta
	}
}

export async function getFeaturesForBlog(blogName) {
	const qs = `?blog=${blogName}`

	try {
		const response = await fetch(featuresAPIURL + qs)
		var { meta, data } = await response.json()
	} catch (e) {
		throw new Error(e)
	}

	if (!data) {
		throw new FetchError(meta.error.message, meta.error)
	}

	return createFeaturesObject(data)
}

function createFeaturesObject(features) {
	return features.reduce((memo, feature) => {
		memo[feature.name] = feature
		return memo
	}, {})
}

export function getDelta(blogs) {
	if (blogs.length < 2) {
		return []
	}

	const [firstBlog] = blogs
	const [, allFeatures] = firstBlog
	const diff = []

	for (const featureName in allFeatures) {
		const notTheSame = blogs.some((blog, index) => {
			const [, features] = blog
			const prevBlog = index === 0 ? blog : blogs[index - 1]
			const [, prevBlogFeatures] = prevBlog

			return prevBlogFeatures[featureName].value !== features[featureName].value
		})

		if (notTheSame) {
			diff.push(featureName)
		}
	}

	return diff
}
