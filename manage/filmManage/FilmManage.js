import React from "react";
import {ajax} from "../../common/tools";

import TableFilm from "./TableFilm";
import AddFilm from "./AddFilm";
import SearchFilm from "./SearchFilm";
import UpdateFilm from "./UpdateFilm";

import {connect} from "react-redux";
import store from "../../common/store";

class FilmManage extends React.Component{
	constructor(props){
		super(props);
		this.state={		
			type:"",
			value:""
		}
	}
	componentWillMount(){
		this.show();
	}

	show(page,type,value){
		console.log("type",type)
		console.log("value",value)
			 var param={
			 		
                    page:page,
                    rows:5
            }
            if(type){
            	param[type]=value
            }
            this.setState({
          		type:type,
           		value:value
            })
        
		ajax({
			type:"get",
			url:"/maoyan/find",
			data:param,
			success:function(data){
				console.log(data)
				
				 store.dispatch({
                    type:"SHOW_ALL_FILM_MF",
					data:data
                });

			}.bind(this)
		})
	}
	render() {
		return (
			<div>
			<h1>电影管理</h1>
			<AddFilm show={this.show.bind(this)}></AddFilm>
			<SearchFilm show={this.show.bind(this)}></SearchFilm>
			<TableFilm type={this.state.type} value={this.state.value} show={this.show.bind(this)}></TableFilm>		
			<UpdateFilm show={this.show.bind(this)} ></UpdateFilm>

			</div>
		);
	}
}

const mapStateToProps = function(store){
	return {
		filmState:store.filmReducer,
		ModelState:store.ModelReducer
	}
}
export default connect(mapStateToProps)(FilmManage)