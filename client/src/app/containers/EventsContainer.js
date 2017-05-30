import React, {Component} from 'react'
import EventsList from '../components/EventsList';
import EventsListImages from '../components/EventsListImages';

import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import * as eventsActions from '../redux/actions/index';


class Events extends Component{
	constructor(props){
		super(props)
		this.state = {
			selectSports: ""
		}
		this.handleSelectSlug = this.handleSelectSlug.bind(this);
		this.handleSelectSports = this.handleSelectSports.bind(this);
	}
	componentDidMount() {
		this.props.actions.getAllImages();
	}
	handleSelectSports(data){
		console.log('TERM', data);
		this.setState({selectSports: data});
		this.props.actions.getImages(this.state.selectSports);
	}
	handleSelectSlug(data){
	}
	render(){
		console.log('PROPS', this.props)
		let events = this.props.events.getAllImages ? this.props.events.getAllImages.data : null
		let image_events = this.props.events.getImages ? this.props.events.getImages.data.Items : null
		return(
				<div className="row row-offcanvas row-offcanvas-right">
            <EventsListImages image_events = {image_events}/>
 						<EventsList events={ this.props.events.getAllImages ? events : null} 
 						handleSelectSports={this.handleSelectSports} 
 						handleSelectSlug={this.handleSelectSlug}
 						selectSports = {this.state.selectSports}
 						/>
          </div>
			)
	}
}


function mapStateToProps(state, ownProps) {
	return {
		events: state.eventsReducer
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(eventsActions, dispatch)
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(Events);