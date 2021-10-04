import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

const Root = (){
	return(
		<BrowserRouter>
			<Switch>
				<Route />
				<Route />

			</Switch>
		</BrowserRouter>
	)
}

ReactDOM.render(Root, document.getElementById('root'))
