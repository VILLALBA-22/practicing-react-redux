import items from '../../data/items'
import { type as findSuggestion } from '../actions/findSuggestion'
const defaultState = []

export default function reducer(state = defaultState, { type, payload }) {
	switch (type) {
		case findSuggestion: {
			const regex = new RegExp(`^${payload}`, 'i')
			return items.filter(e => regex.test(e.title))
		}
		default:
			return state
	}
}
