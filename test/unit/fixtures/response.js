export function mockResponse(status, response) {
	return new Response(JSON.stringify(response), {
		status: status,
		headers: {
			'Content-type': 'application/json'
		}
	})
}

export const simpleData = [
	{
		name: 'cloudinary_pop',
		value: 'off'
	},
	{
		name: 'use_dap',
		value: 'on'
	}
]

export const simpleFeaturesObject = {
	cloudinary_pop: {
		name: 'cloudinary_pop',
		value: 'off'
	},
	use_dap: {
		name: 'use_dap',
		value: 'on'
	}
}

export const metaOk = { error: null, warnings: [] }

export const notFoundMeta = {
	error: {
		message: 'Could not find blog by host: gawker',
		code: 'NOT_FOUND',
		uid: 'kinja-profile-ff848bd4-3c05-4eb5-b29b-95c3d1d9ed18'
	}
}
