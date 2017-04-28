import React from "react";

export default class MatchManage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			confirmDirty: false,
			visible:false,
			newKey:{}
		}
	}
	render() {
		return (
			<div>
			<h1>电影院线匹配管理</h1>
			
			</div>
						);
	}
}