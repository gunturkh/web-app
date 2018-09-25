import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BrowsePage from './components/Pages/Browse/BrowsePage.js'
import ComparePage from './components/Pages/Compare/ComparePage.js'
import DetailPage from './components/Pages/Detail/DetailPage'
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={BrowsePage}/>
						<Route path="/compare" component={ComparePage}/>
						<Route path="/detail" component={DetailPage}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
