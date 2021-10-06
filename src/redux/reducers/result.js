import items from '../../data/items'
import { type as findResults } from '../actions/findResult'
const defaultState = []

export default function reducer(state = defaultState, { type, payload }) {
	switch (type) {
		case findResults: {
			const regex = new RegExp(`^${payload}`, 'i')
			return items.filter(e => regex.test(e.title))
		}
		default:
			return state
	}
}
