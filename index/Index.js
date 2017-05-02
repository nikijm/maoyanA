import React from "react";
import { Layout,Menu,Row, Col} from 'antd';
import {Link} from "react-router";
const { Header, Footer, Content} = Layout;

import {ajax} from "../common/tools";


export default class Index extends React.Component{
	constructor(props){
		super(props);
			 this.state = {
	    current: 'login',
      data:{}
	  }
	}
	 handleClick(e){
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  clickPic(){
    ajax({
      type:"get",
      url:"/maoyan/find",
      data:{
        Cname:"教父1"
      },
      success:function(data){
        console.log("pic",data)
          this.setState({
            data:data.atlas

          })
    
      }.bind(this)
    })

    console.log("获取",this.state.data)
  }
	render(){

		return <div>
		<Layout>
      	<Header style={{backgroundColor:"white"}}>
      	<Row>
      	<Col span={4}>
      	<h1 >猫眼后台管理系统</h1>
      	</Col>
      	<Col offset={20}>
      	<Menu
        onClick={this.handleClick.bind(this)}
        selectedKeys={[this.state.current]}
        mode="horizontal" >
        <Menu.Item key="login" style={{fontSize:20,paddingTop:15}}>
         <Link to="login">登录</Link>
        </Menu.Item>
       
      </Menu>
      </Col>
	</Row>

   </Header>
      	<Content style={{height:560,padding:20}}>{this.props.children}</Content>
      	<Footer style={{fontSize:20,backgroundColor:"#00a0e9",height:110}}>欢迎登录猫眼后台管理系统/></Footer>
    	</Layout>
    	</div>
	}
}