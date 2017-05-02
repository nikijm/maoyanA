import React from "react";
import {ajax} from "../../common/tools";

import TableFilm from "./TableFilm";
import AddFilm from "./AddFilm";
import SearchFilm from "./SearchFilm";
import UpdateFilm from "./UpdateFilm";


export default class FilmManage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:{},
			type:"",
			value:"",
			updatas:{},
			visible:false

		}
	}
	showModal(){
		this.setState({
			visible: true
		});
	}
	handleOk(e){
		console.log(1);
		this.setState({
			visible: false
		});
	}
	handleCancel(e){
		console.log(e);
		this.setState({
			visible: false
		});
	}
	componentWillMount(){
		this.show();
	}
	setUpdata(data){
		console.log("updatas",data)
		this.setState({
			updatas:data,
			visible:true

		})
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
			<TableFilm type={this.state.type} value={this.state.value} setUpdata={this.setUpdata.bind(this)} data={this.state.data} show={this.show.bind(this)}></TableFilm>		
			<UpdateFilm visible={this.state.visible} handleOk={this.handleOk.bind(this)} handleCancel={this.handleCancel.bind(this)} showModal={this.showModal.bind(this)} updatas={this.state.updatas} show={this.show.bind(this)} ></UpdateFilm>

			</div>
		);
	}
}