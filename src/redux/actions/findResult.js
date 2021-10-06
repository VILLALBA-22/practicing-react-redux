export const type = 'findResults'

export default function findResults(text) {
	return {
		type: type,
		payload: text,
	}
}
