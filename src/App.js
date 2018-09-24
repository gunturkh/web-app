import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BrowsePage from './components/pages/browse/BrowsePage.js'
import ComparePage from './components/pages/compare/ComparePage.js'
import DetailPage from './components/pages/detail/DetailPage'
import Home from './components/pages/home/Home.js'
class App extends Component {
	render() {
		return (
			<Router>
				<div className="row mt-5">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/browse" component={BrowsePage}/>
						<Route path="/compare" component={ComparePage}/>
						<Route path="/detail" component={DetailPage}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
