import React , {Component} from 'react'

class EventsListImages extends Component{

	render(){
		console.log('EVENTLISTIMAGES', this.props)
		const { image_events } = this.props
		return(
				<div className="col-xs-12 col-sm-9">
          <p className="pull-right visible-xs">
            <button type="button" className="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
          </p>
          <div className="row">
            {
            	image_events ? image_events.map((data,index)=>{
            		let keys = data.s3_key ? data.s3_key : null
            		console.log(keys)
            		return (
            				<div className="col-xs-6 col-lg-4" key={index}>
									    <a href="#" className="thumbnail">
									      <img alt={data.slug} />
									    </a>
			              <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
			            	</div>
            			)
            	})
            	: null
            	
            }
          </div>
        </div>
			)
	}
}

export default EventsListImages