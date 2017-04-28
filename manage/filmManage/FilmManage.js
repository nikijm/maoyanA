import React from "react";
import {ajax} from "../../common/tools";

import TableFilm from "./TableFilm";

export default class FilmManage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:{}

		}
	}
	componentWillMount(){
		this.show();
	}
	show(page){
		ajax({
			type:"get",
			url:"/maoyan/find",
			data:{
				page:page,
				rows:5
			},
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
			<TableFilm data={this.state.data} show={this.show.bind(this)}></TableFilm>
			</div>
		);
	}
}