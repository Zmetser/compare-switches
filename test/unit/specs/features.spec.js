import {
	mockResponse,
	metaOk,
	notFoundMeta,
	simpleData,
	simpleFeaturesObject
} from '../fixtures/response.js'

import {
	noDiff,
	allDiff,
	allDiffResult,
	someDiffInOne,
	someDiffInOneResult,
	someDiffInAll,
	someDiffInAllResult
} from '../fixtures/blogs.js'

import {
	getDelta,
	getFeaturesForBlog
} from 'app/store/features'

describe('data from kinja API', () => {
	it('should be called with correct params', () => {})

	it('should reject if the blog is not found', (done) => {
		const response = { meta: notFoundMeta }

		spyOn(window, 'fetch').and.callFake(() =>
			Promise.resolve(mockResponse(404, response)))

		getFeaturesForBlog('gawker').then(() => {}, (err) => {
			expect(err.message).toBe(notFoundMeta.error.message)
			done()
		})
	})

	it('should be transformed to a features object', (done) => {
		const response = { meta: metaOk, data: simpleData }

		spyOn(window, 'fetch').and.callFake(() =>
			Promise.resolve(mockResponse(200, response)))

		getFeaturesForBlog('jezebel.com').then((blogFeatures) => {
			expect(blogFeatures).toEqual(simpleFeaturesObject)
			done()
		})
	})
})

describe('calculating delta', () => {
	it('should only deal with two or more blogs', () => {
		expect(getDelta([])).toEqual([])
		expect(getDelta([{}])).toEqual([])
	})

	it('should return empty array if no delta was found', () => {
		expect(getDelta(noDiff)).toEqual([])
	})

	it('should return the name of the features', () => {
		expect(getDelta(allDiff)).toEqual(allDiffResult)
	})

	it('should get correct delta with two diff blogs', () => {
		expect(getDelta(someDiffInOne)).toEqual(someDiffInOneResult)
	})

	it('should get correct delta with more diff blogs', () => {
		expect(getDelta(someDiffInAll)).toEqual(someDiffInAllResult)
	})
})
