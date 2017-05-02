import React from "react";
import {ajax} from "../../common/tools";

import {Table, Icon,Card,Button,Modal,Pagination,notification } from 'antd';
const confirm = Modal.confirm;

import {connect} from "react-redux";
import store from "../../common/store";

class TableFilm extends React.Component{
	constructor(props){
		super(props);
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
				
				store.dispatch({
					type:"SHOW_FILM_MF",
					film:data
				})
				store.dispatch({
					type:"SHOW_UPDATE_MODAL_FM",
					updateVisible:true
				})
			}.bind(this)
		})
	}
	del(id,ele){
		var data=ele.Cname
		 confirm({
		 		title: '确定删除该信息?',
			    content: `确定删除《${data}》这部电影`,
			    onOk() {
			      ajax({
						type:"get",
						url:"/maoyan/del",
						data:{
							_id:id
						},
						success:function(data){
							console.log(data)
							notification[success]({
						    message: '删除提示',
						    description: '数据删除成功',
						  });
							this.props.show()
						}.bind(this)
					})
			    },
			    onCancel() {
			      console.log('Cancel');
			    },

		 	})
		
	}
	render(){
		const columns = [{
			title: '中文名',
			dataIndex: 'Cname',
			key: 'Cname',
			fixed:"left",
			width:150
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
			width:80
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
				<Button type="danger" onClick={()=>{this.del(text._id,text)}}>删除</Button>
				</span>
				)
			}];
			const data=this.props.filmState.data
			const pagination={
				current:parseInt(this.props.filmState.data.curpage),
				pageSize:data.eachpage,
				total:data.total,
				onChange:function(page, pageSize){
					this.props.show(page,this.props.type,this.props.value)
				}.bind(this)
			}

			return <div style={{clear:'both'}}>

			<Table rowKey="_id" dataSource={this.props.filmState.data.rows} columns={columns} pagination={pagination} scroll={{x:2400,y:270}}/>
		
			</div>

		}
	}

const mapStateToProps = function(store){
	return {
		filmState:store.filmReducer,
		ModelState:store.ModelReducer
	}
}
export default connect(mapStateToProps)(TableFilm)






