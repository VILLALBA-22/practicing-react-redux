import React, { useState } from 'react'
import { connect } from 'react-redux'
import Page from './Page'
import findSuggestion from '../../redux/actions/findSuggestion'

function IAppBar({ suggestions, findSuggestion }) {
	const [text, setText] = useState('')
	const [selection, setSelection] = useState('')

	const handleChangeText = text => {
		findSuggestion(text)
		setText(text)
	}
	const handleChangeSelection = text => {}
	return (
		<Page
			text={text}
			suggestions={suggestions}
			onChangeText={handleChangeText}
			onChangeSelection={handleChangeSelection}
		/>
	)
}

const mapStateToProps = state => {
	return {
		suggestions: state.suggestions,
	}
}

const mapDispatchToProps = {
	findSuggestion,
}

export default connect(mapStateToProps, mapDispatchToProps)(IAppBar)
