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
			title: '电影名',
			dataIndex: 'Cname',
			key: 'Cname',
			fixed:"left",
			width:100
		}, {
			title: '英文电影名',
			dataIndex: 'Ename',
			key: 'Ename',
			fixed:"left",
			width:150
		}, {
			title: '导演',
			dataIndex: 'director',
			key: 'director',
			width:250
		}, {
			title: '主演',
			dataIndex: 'star',
			key: 'star',
			width:150
		}
		, {
			title: '上映时间',
			dataIndex: 'time',
			key: 'time',
			width:150
		}
		, {
			title: '上映地区',
			dataIndex: 'area',
			key: 'area',
			width:150
		}
		, {
			title: '电影时长',
			dataIndex: 'length',
			key: 'length',
			width:150
		}
		, {
			title: '票价',
			dataIndex: 'Admission',
			key: 'Admission',
			width:150
		}
		, {
			title: '语言',
			dataIndex: 'language',
			key: 'language',
			width:150
		}
		, {
			title: '图集',
			dataIndex: 'atlas',
			key: 'atlas',
			width:250
		}
		, {
			title: '电影详情',
			dataIndex: 'details',
			key: 'details',
			width:1000
		}
		,{
			title: '操作',
			key: 'anction',
			fixed:"right",
			width:100,
			render:(text, record)=>(
				<span>
				<Button type="primary" >修改</Button>
				<Button type="danger" onClick={()=>{this.del(text._id)}}>删除</Button>
				</span>
				)
			}];
			const pagination={
				current:this.props.data.curpage,
				pageSize:this.props.data.eachpage,
				total:this.props.data.total,
				onChange:function(page, pageSize){
					this.props.show(page)
				}.bind(this)
			}

			return <div>

			<Table dataSource={this.props.data.rows} columns={columns} pagination={pagination} scroll={{x:2800,y:300}}/>
		
			</div>

		}
	}







