import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BrowsePage from './components/pages/Browse.js'
import ComparePage from './components/pages/Compare.js'
import DetailPage from './components/pages/Detail.js'
import Home from './components/pages/Home.js'
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
