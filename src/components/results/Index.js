import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Page from './Page'

function Results({ results, history }) {
	return <Page results={results} goTo={path => history.push(path)} />
}

const mapStateToProps = state => {
	return {
		results: state.result,
	}
}

export default withRouter(connect(mapStateToProps)(Results))
