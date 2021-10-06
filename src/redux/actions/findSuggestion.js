export const type = 'findSuggestion'

export default function findSuggestion(text) {
	return {
		type: type,
		payload: text,
	}
}
