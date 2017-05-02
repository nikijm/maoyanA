import React from "react";
import {ajax} from "../../common/tools";

import {Table, Icon,Card,Button,Modal,Pagination } from 'antd';


export default class TableFilm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:{}
		}
	}
	showById(id){
		console.log(id)
		ajax({
			type:"get",
			url:"/maoyan/find",
			data:{
				_id:id
			},
			success:function(data){
				this.props.setUpdata(data)
			}.bind(this)
		})
	}
	del(id){
		console.log(id)
		ajax({
			type:"get",
			url:"/maoyan/del",
			data:{
				_id:id
			},
			success:function(data){
				console.log(data)
				Modal.confirm({
			    title: '提示',
			    content: '数据删除成功',
			    okText: '确定',
			    cancelText: '取消'
			  });
				this.props.show()
			}.bind(this)
		})
	}
	render(){
		const columns = [{
			title: '中文名',
			dataIndex: 'Cname',
			key: 'Cname',
			fixed:"left",
			width:100
		}, {
			title: '英文名',
			dataIndex: 'Ename',
			key: 'Ename',
			fixed:"left",
			width:150
		}, {
			title: '导演',
			dataIndex: 'director',
			key: 'director',
			width:200
		}, {
			title: '主演',
			dataIndex: 'star',
			key: 'star',
			width:100
		}
		, {
			title: '上映时间',
			dataIndex: 'time',
			key: 'time',
			width:100
		}
		, {
			title: '上映地区',
			dataIndex: 'area',
			key: 'area',
			width:100
		}
		, {
			title: '电影时长',
			dataIndex: 'length',
			key: 'length',
			width:100
		}
		, {
			title: '票价',
			dataIndex: 'Admission',
			key: 'Admission',
			width:80
		}
		
		
		, {
			title: '语言',
			dataIndex: 'language',
			key: 'language',
			width:80
		}
		, {
			title: '电影详情',
			dataIndex: 'details',
			key: 'details',
			width:1000
		}
		, {
			title:'图集',
			dataIndex:'atlas',
			key:'atlas',
			render:(value)=>{
			var ele="http://localhost:3000/"+value
			console.log(ele)
				return <img width="100" height="100" src={ele}/>
			}
		}
		,{
			title:'操作',
			key: 'anction',
			fixed:"right",
			width:150,
			render:(text, record)=>(
				<span>
				<Button type="primary" onClick={()=>{this.showById(text._id)}}>修改</Button>
				<Button type="danger" onClick={()=>{this.del(text._id)}}>删除</Button>
				</span>
				)
			}];
			const pagination={
				current:this.props.data.curpage,
				pageSize:this.props.data.eachpage,
				total:this.props.data.total,
				onChange:function(page, pageSize){
					this.props.show(page,this.props.type,this.props.value)
				}.bind(this)
			}

			return <div style={{clear:'both'}}>

			<Table rowKey="_id" dataSource={this.props.data.rows} columns={columns} pagination={pagination} scroll={{x:2400,y:270}}/>
		
			</div>

		}
	}







