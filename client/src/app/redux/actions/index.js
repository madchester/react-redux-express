import axios from 'axios';
import * as types from './actionTypes';
//import sample from './images.json';
import _ from 'underscore';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function getAllImages(){
	return function(dispatch){
		return axios.get('').then((data) =>{
			let resp = data.data.data
			resp.getAllImages = true
			dispatch ({
				type: types.GET_ALL_IMAGES,
				payload: resp
			});
		})
	}
		
}

export function getImages(params){
	return function(dispatch) {
		return axios.get('http://localhost:3001/api/test').then((resp)=>{
			let localresp = resp.data
			localresp.getAllImages = false
				dispatch({
					type: types.GET_IMAGES,
					payload: resp
				})
		})
	}	
}
