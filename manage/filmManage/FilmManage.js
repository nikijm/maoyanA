import React from "react";
import {ajax} from "../../common/tools";

import TableFilm from "./TableFilm";
import AddFilm from "./AddFilm";
import SearchFilm from "./SearchFilm";

export default class FilmManage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:{},
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
			 		findType:"exact",
                    page:page,
                    rows:5
            }
            if(type){
            	param[type]=value
            }
            this.state.type=type;
            this.state.value=value
		ajax({
			type:"get",
			url:"/maoyan/find",
			data:param,
			success:function(data){
				console.log(data)
				this.setState({
					data:data
					
				})
			}.bind(this)
		})
	}
	render() {
		return (
			<div>
			<h1>电影管理</h1>
			<AddFilm show={this.show.bind(this)}></AddFilm>
			<SearchFilm show={this.show.bind(this)}></SearchFilm>
			<TableFilm data={this.state.data} show={this.show.bind(this)}></TableFilm>		
			</div>
		);
	}
}