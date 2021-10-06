import items from '../../data/items'
import { type as findCurrentItem } from '../actions/findCurrentItem'
const defaultState = {}

export default function reducer(state = defaultState, { type, payload }) {
	switch (type) {
		case findCurrentItem: {
			console.log(items.find(item => item.id === payload))

			return items.find(item => item.id === parseInt(payload))
		}
		default:
			return state
	}
}
