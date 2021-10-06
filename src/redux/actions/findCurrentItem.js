export const type = 'findCurrentItem'

export default function findCurrentItem(id) {
	return {
		type: type,
		payload: id,
	}
}
