import React from 'react'
import ReactDOM from 'react-dom'
import { provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router'

const Root = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/results' component={Results} />
				<Route path='/details:id' component={Details} />
				<Redirect from='/' to='/results' />
			</Switch>
		</BrowserRouter>
	)
}

ReactDOM.render(Root, document.getElementById('root'))
