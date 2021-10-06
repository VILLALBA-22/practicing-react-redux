import React, { useState } from 'react'
import { connect } from 'react-redux'
import Page from './Page'
import { withRouter } from 'react-router-dom'
import findSuggestion from '../../redux/actions/findSuggestion'
import findResults from '../../redux/actions/findResult'

function IAppBar({ suggestions, findSuggestion, findResults, history }) {
	const [text, setText] = useState('')

	const handleChangeText = text => {
		findSuggestion(text)
		setText(text)
	}
	const handleChangeSelection = text => {
		setText(text)
		findResults(text)
		history.push('/results')
	}
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
	findResults,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IAppBar))
