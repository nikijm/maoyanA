import React from "react"
import {ajax} from "../../common/tools.js"

import { Form, Input, Tooltip, Icon, Cascader, Radio,Upload,Select, Row, Col, Checkbox, Button ,Card , Modal} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class AddFilm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			visible:false
		}
	}
	AddshowModal(){
		this.setState({
			visible:true
		})
	}
	handleOk(e){
	this.props.form.validateFieldsAndScroll(function(errors,values){
		if(!errors){

			ajax({
				type:"get",
				url:"/maoyan/add",
				data:values,
				success:function(){
					this.props.show();
					 Modal.success({
		              title: '',
		              content: '添加成功',
		              });

				}.bind(this)
			})

		}else{
			Modal.error({
	      title: '',
	      content: '输入框不得为空',
	      });
		}
	}.bind(this))
		this.setState({
			visible:false
		})
	}
	handleCancel(){
		this.setState({
			visible:false
		})
	}
	normFile(e){
	    console.log('Upload event:', e);
	    if (Array.isArray(e)) {
	      return e;
	    }
	    return e && e.fileList;
	  }

	render(){
		const RadioButton = Radio.Button;
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
				const tailFormItemLayout = {
					wrapperCol: {
						xs: {
							span: 24,
							offset: 0,
						},
						sm: {
							span: 14,
							offset: 6,
						},
					},
				};

		return <div style={{float:'left',marginRight:20}}>
		<Button type="primary" onClick={this.AddshowModal.bind(this)}>增加</Button>
			<Modal title="增加" visible={this.state.visible}
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


					<FormItem {...formItemLayout} label="Upload" extra="添加图集">
			          {getFieldDecorator('atlas', {valuePropName: 'fileList',getValueFromEvent: this.normFile,
			          })(<Upload name="logo" action="/maoyan/add" listType="picture">
			              <Button>
			                <Icon type="upload" /> Click to upload
			              </Button>
			            </Upload>
			          )}
			        </FormItem>
				</Form>
			</Modal>

		</div>
	}	

}
export default Form.create()(AddFilm);