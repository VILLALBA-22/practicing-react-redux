const defaultState = []

export default function reducer(state = defaultState, { type, payload }) {
	switch (type) {
		case 'findSuggestion': {
			return [
				{
					id: 1,
					title: 'findSuggestions',
				},
			]
		}
		default:
			return state
	}
}
