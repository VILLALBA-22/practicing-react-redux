import React from 'react'
import { connect } from 'react-redux'
import Page from './Page'

function Details({ suggestions }) {
	console.log(suggestions)

	return <Page suggestions={suggestions} />
}

const mapStateToProps = state => {
	return {
		suggestions: state.suggestions,
	}
}

export default connect(mapStateToProps)(Details)
