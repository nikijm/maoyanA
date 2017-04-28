import React from "react";

export default class HotPlay extends React.Component{
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
			<h1>电影热映管理</h1>
			
			</div>
						);
	}
}