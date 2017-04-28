import React from "react";

export default class Users extends React.Component{
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
			<h1>用户管理</h1>
			
			</div>
						);
	}
}