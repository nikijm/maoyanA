import React from "react";
import {ajax} from "../common/tools";

import { Form, Icon, Input, Button, Checkbox ,Row, Col ,Card,Modal } from 'antd';
const FormItem = Form.Item;


class Login extends React.Component{

    constructor(props){
        super(props);
        this.state= {}


    }
    loginW(){
        console.log(1)
        var data=this.props.form.getFieldsValue();
       
        console.log("登录",data)
        ajax({
            type:"get",
            url:"/users/find",
            data:{
                userName:data.userName,
                pwd:data.pwd
                      
            },
            success:function(data){
                if(data.length>0){
                      Modal.success({
                      title: '',
                      content: '登录成功',
                      });
                 this.props.router.replace("/manage")
             }else{
                   Modal.error({
                    title: '',
                    content: '用户名或密码错误',
                  });
            }
        }.bind(this)
    })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
        }
    })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(

           <Row type="flex" justify="center">
           <Col span={5}>
           <div style={{ background: '#ECECEC', paddingTop:60}}>
           <Card title="请登录" bordered={false} style={{ width: 400,height:300}}>
           <Form  className="login-form" >
           <FormItem>
           {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
        })(
        <Input prefix={<Icon type="user" style={{ fontSize: 13}} />} placeholder="Username"/>
        )}
        </FormItem>
        <FormItem>
        {getFieldDecorator('pwd', {
            rules: [{ required: true, message: '请输入密码!' }],
        })(
        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
        )}
        </FormItem>
        <FormItem>
        {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
        })(
        <Checkbox>Remember me</Checkbox>
        )}
        <a className="login-form-forgot" href="">Forgot password</a>
        <p style={{textAlign:"center"}}><Button type="primary" htmlType="submit" className="login-form-button" style={{width:352}} onClick={this.loginW.bind(this)}>
        Log in
        </Button></p>
        Or <a href="">register now!</a>
        </FormItem>
        </Form>
        </Card>
        </div>
        </Col>
        </Row>

        )
    }
}

export default Form.create()(Login);

