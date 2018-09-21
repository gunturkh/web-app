import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = state => {
	return { content: state.content }
}

class ConnectedList extends Component{
	constructor(props) {
		super (props)
	}
	render(){
		return (
			<ul className="list-group list-group-flush">
				{this.props.content.map((item,id) => (
					<li className="list-group-item" key={id}>
						{item.insuranceProviderId}
					</li>
				))}
			</ul>
		)
	}
}


ConnectedList.propTypes = {
	content: PropTypes.array
}

const List = connect(mapStateToProps)(ConnectedList)

export default List