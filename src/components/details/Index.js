import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Page from './Page'
import findCurrentItem from '../../redux/actions/findCurrentItem'

function Details({ findCurrentItem, currentItem, history, match }) {
	useEffect(() => {
		findCurrentItem(parseInt(match.params.id))
	}, [])
	return <Page currentItem={currentItem} goTo={path => history.push(path)} />
}

const mapStateToProps = state => {
	return {
		currentItem: state.currentItem,
	}
}

const mapDispatchToProps = {
	findCurrentItem,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details))
