import React, { Component } from 'react'
import Navbar from '../../navbar/Navbar.js'
import './Home.css'

class Home extends Component {
	render(){
		return (
			
			<div className="flexContainer flexColumn fullHeight whiteBackground">
				<Navbar/>
				<div className="flexContainer flexItem">
					<main className="flexItem whiteBackground main">
						<p>Put Content Here</p>
						<a href="index.html" className="homeButton">Return Home</a>
					</main>
					<aside className="sidebar sidebarLeft">
						<h2>Filter</h2>
						<p>Put your content here</p>
					</aside>
					{/* <aside className="sidebar sidebarRight">
						<h2>Right Sidebar</h2>
						<p>Put your content here</p>
					</aside> */}
				</div>
				<footer className="flexContainer flexCenter blueBackground whiteText height50">&copy; Jennifer Bland</footer>
			</div>
		)
	}
}

export default Home