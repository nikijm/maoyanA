import React from "react"
import {ajax} from "../../common/tools.js"

import {connect} from "react-redux";
import store from "../../common/store";

import { Form, Input, Tooltip, Icon, Cascader,Upload, Button , Modal} from 'antd';
const FormItem = Form.Item;

class AddFilm extends React.Component{
	constructor(props){
		super(props)
		this.state={
		
			indexImgList:[],
			indexImgPath:[]
		}
	}
	AddshowModal(){
		store.dispatch({
			type:"SHOW_ADD_MODAL_FM",
			addVisible:true
		})
	}
	handleOk(){
	var data = this.props.form.getFieldsValue();
	data.atlas=JSON.stringify(this.state.indexImgPath);
	ajax({
		type:"post",
		url:"/maoyan/add",
		data:data,
		success:function(){
			this.props.show();
			 Modal.success({
              title: '',
              content: '添加成功',
              });
			 store.dispatch({
					type:"SHOW_ADD_MODAL_FM",
					addVisible:false
				})
			}.bind(this)			
	})



	}
	handleCancel(){
	store.dispatch({
		type:"SHOW_ADD_MODAL_FM",
		addVisible:false
	})
	}

	render(){
		const props ={
			action:"/upload",
			listType:'picture',
			multiple:true,
			fileList:this.state.indexImgList,
			onChange:function(data){
				console.log(data)
				let fileList=data.fileList;
				let indexPath=fileList.map(function(file){
						return file.response
				})
				this.setState({
					indexImgList:fileList,
					indexImgPath:indexPath
				})
			}.bind(this)

		}
		const { getFieldDecorator } = this.props.form;
				const formItemLayout = {
					labelCol: {
						xs: { span: 24 },
						sm: { span: 6 },
					},
					wrapperCol: {
						xs: { span: 24 },
						sm: { span: 14 },
					},
				};
	
		return <div style={{float:'left',marginRight:20}}>
		<Button type="primary" onClick={this.AddshowModal.bind(this)}>增加</Button>
			<Modal title="增加" visible={this.props.ModelState.addVisible}
			onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
			>
				<Form >
					<FormItem {...formItemLayout} label={(<span>中文名&nbsp;</span>)}>
						{getFieldDecorator('Cname', {rules: [{ required: true}]})(<Input />)}
					</FormItem>

					<FormItem {...formItemLayout} label={(<span>英文名&nbsp;</span>)}>
						{getFieldDecorator('Ename', {rules: [{ required: true}]})(<Input />)}
					</FormItem>

					<FormItem {...formItemLayout} label={(<span>导演&nbsp;</span>)}>
						{getFieldDecorator('director', {rules: [{ required: true}]})(<Input />)}
					</FormItem>

					<FormItem {...formItemLayout} label={(<span>主演&nbsp;</span>)}>
						{getFieldDecorator('star', {rules: [{ required: true}]})(<Input />)}
					</FormItem>

					<FormItem {...formItemLayout} label={(<span>上映时间&nbsp;</span>)}>
						{getFieldDecorator('time', {rules: [{ required: true}]})(<Input />)}
					</FormItem>

					<FormItem {...formItemLayout} label={(<span>上映地区&nbsp;</span>)}>
						{getFieldDecorator('area', {rules: [{ required: true}]})(<Input />)}
					</FormItem>

					<FormItem {...formItemLayout} label={(<span>电影时长&nbsp;</span>)}>
						{getFieldDecorator('length', {rules: [{ required: true}]})(<Input />)}
					</FormItem>


					<FormItem {...formItemLayout} label={(<span>票价&nbsp;</span>)}>
						{getFieldDecorator('Admission', {rules: [{ required: true}]})(<Input />)}
					</FormItem>


					<FormItem {...formItemLayout} label={(<span>语言&nbsp;</span>)}>
						{getFieldDecorator('language', {rules: [{ required: true}]})(<Input />)}
					</FormItem>


					<FormItem {...formItemLayout} label={(<span>电影详情&nbsp;</span>)}>
						{getFieldDecorator('details', {rules: [{ required: true}]})(<Input />)}
					</FormItem>

			        <FormItem {...formItemLayout}
			        label = "图集">

		                <Upload {...props}>
		                  <Button>
		                    <Icon type="upload" /> upload
		                  </Button>
		                </Upload>
            		</FormItem>

				</Form>
			</Modal>

		</div>
	}	

}

const mapStateToProps = function(store){
	return {
		filmState:store.filmReducer,
		ModelState:store.ModelReducer
	}
}


export default connect(mapStateToProps)(Form.create()(AddFilm));