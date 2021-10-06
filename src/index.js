import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Results from './components/results/Index'
import Details from './components/details/Index'

function Root() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path='/results' component={Results} />
					<Route path='/details/:id' component={Details} />
					<Redirect from='/' to='/results' />
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'))
