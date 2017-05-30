import React, {Component} from 'react'

const EventListItem = (props) =>{
	const {handleSelectSlug,handleSelectSports,selectSports} = props
	let active = selectSports === props.data.slug ? 'list-group-item active' : 'list-group-item'
	return(
			<a href="#" className={active} onClick={handleSelectSports.bind(this,props.data.slug)}>{props.data.name}</a>
		)
}

export default EventListItem