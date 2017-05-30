import React, {Component} from 'react'
import EventsListItem from './EventsListItem';
class EventsList extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const {events, handleSelectSlug, handleSelectSports, selectSports} = this.props
		const listofevents = events ? events.map((data,index)=>{
				return <EventsListItem data={data} key = {index} selectSports={selectSports} handleSelectSports={handleSelectSports}/>
			})
		: null

		return(
				<div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
          <div className="list-group">
          	{listofevents}
          </div>
        </div>
			)
	}
} 

export default EventsList